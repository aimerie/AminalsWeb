import { APCPad } from "../Models/APCPad.js";
import { PadColor } from "../Models/PadColor.js";

import * as wm from "../../../node_modules/webmidi/dist/esm/webmidi.esm.js";

class APCMiniVM {
    public Pads: Array<APCPad> = [];
    public PadColors: Array<PadColor> = [];

    public Controller: KnockoutObservable<wm.Input> = ko.observable<wm.Input>();
    /**
     * The full input device models loaded for the page
     */
    // private wmInputs: Array<wm.Input> = [];
    private wmOutputs: Array<wm.Output> = [];

    public OutputDeviceNames = ko.observableArray<string>();
    public OutputDevice = ko.observable<wm.Output>();
    public IsSupportedController = ko.observable<boolean>(false);

    public constructor() {
        this.Pads.push(...this.buildPads());
        this.PadColors = Object.values(PadColor);
    }

    public OnPostInit(): void {
        // enable webmidi with sysex support
        wm.WebMidi
            .enable({ sysex: true })
            .then(() => this.loadMIDIDevices())
            .catch(err => alert(err));
    }

    /**
     * Load devices from the browser (webmidi)
     * @returns
     */
    private loadMIDIDevices = (): any => {
        console.log("WebMidi loaded with sysex enabled!");
        // const inputs: Array<wm.Input> = wm.WebMidi.inputs;
        const outputs: Array<wm.Output> = wm.WebMidi.outputs;
        let result: Array<string> = [];
        // this.wmInputs = inputs;
        this.wmOutputs = outputs;

        for (let i of this.wmOutputs) {
            result.push(...[`${i.name}`]);
        }
        console.log('outputs:', this.wmOutputs);
        this.OutputDeviceNames(result);
        // this.InputDevices(result);
        return Promise.resolve();
    }

    /**
     * Controller pads for the AKAI MPK Mini mk2
     * @returns
     */
    private buildPads(): APCPad[] {
        let result: APCPad[] = [];

        for (let i = 0; i < 64; i++) {
            result.push(new APCPad(i, PadColor.Color5, "solid"));
        }

        return result;
    }

    public SendSignal = (): void => {
        const _output = this.OutputDevice();
        if (_output.name !== undefined) {
            const out = wm.WebMidi.getOutputByName(_output.name);
            for (let _pad of this.Pads) {
                out.sendNoteOn(_pad.index, { rawAttack: _pad.index, time: 2, channels: 6 });
            }
        }        
    }

    public ResetDevice = (): void => {
        const _output = this.OutputDevice();
        if (_output.name !== undefined) {
            const out = wm.WebMidi.getOutputByName(_output.name);
            for (let _pad of this.Pads) {
                out.sendNoteOn(_pad.index, { rawAttack: 0, time: 2 });
            }            
        }
    }

    private lightThatShitUp(dvcOutput: wm.Output): void {
        console.log('first output  ', dvcOutput.name);

        console.log(this.Pads[0]);

        for (let _pad of this.Pads) {
            // raw attack = color value!!!
            dvcOutput.sendNoteOn(_pad.index, { rawAttack: 5 });
        }

        

        //let note = new wm.Note(0, { rawAttack: 5, release: 0 });
        //dvcOutput.sendNoteOn(note, {time: 50, channels: 6});

        //// fully brightness channel
        //const channel = dvcOutput.channels[6];
        //console.log('output channel...', channel);
        //channel.sendNoteOn(66, { rawAttack: 21, time: 20 }).sendNoteOn(67, { rawAttack: 29, time: 20 }).sendNoteOn(68, { rawAttack: 5, time: 20 }).sendNoteOn(69, { rawAttack: 67, time: 20 });

        //// fully brightness channel
        //const channelBlinky = dvcOutput.channels[13];
        //console.log('output channel...', channel);
        //channelBlinky.sendNoteOn(70, { rawAttack: 21, time: 20 });
        //channelBlinky.sendNoteOn(71, { rawAttack: 29, time: 20 });
        //channelBlinky.sendNoteOn(72, { rawAttack: 5, time: 20 });
        //channelBlinky.sendNoteOn(73, { rawAttack: 67, time: 20 });


        //debugger;

        //const altOut = wm.WebMidi.outputs[2];
        //console.log('second output...', altOut.name);
        //altOut.sendNoteOn(64, { rawAttack: 5 });
        //altOut.channels[1].sendNoteOn(66, { rawAttack: 21, time: 40 });
    }

    public SelectDeviceByName = (inputDvcName: string): void => {
        console.log('Select device by name: ', inputDvcName, this);
        const inputDvc = wm.WebMidi.getInputByName(inputDvcName);
        const outputDvc = wm.WebMidi.getOutputByName(inputDvcName);
        
        if (inputDvc !== null) {
            console.log('selected input device...', inputDvc, outputDvc, outputDvc);
            let isAkai: boolean = inputDvcName.toLowerCase() === 'apc mini mk2';
            console.log(isAkai);
            this.IsSupportedController(isAkai);

            if (this.IsSupportedController()) {
                this.OutputDevice(outputDvc);
                this.lightThatShitUp(outputDvc);
            }
            
            
            
        }
    }
}


$((): void => {
    const viewModel = new APCMiniVM();
    ko.applyBindings(viewModel); // This makes Knockout get to work

    viewModel.OnPostInit();
});
