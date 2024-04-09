import { PadColor } from "./PadColor.js";

export class APCPad {
    public index: number;
    public Color = ko.observable<PadColor>();
    public ColorRaw: number;
    public Behavior: 'solid' | 'blink' | 'pulse';
    public Brightness: number;


    constructor(idx: number, clr: PadColor, bhv: 'solid' | 'blink' | 'pulse') {
        this.index = idx;
        this.Color(clr);
        this.Behavior = bhv; 
    }

    public SelectColor = (): void => {
        console.log('hit!!!', this);





    }
}