class APCMiniVM {
    public Pads: Array<APCPad> = [];

    public constructor() {
        this.Pads.push(...this.buildPads());
    }

    private buildPads(): APCPad[] {
        let result: APCPad[] = [];

        for (let i = 0; i < 64; i++) {
            result.push(new APCPad(i, PadColor.Color0, "solid"));
        }

        return result;
    }
}


$((): void => {
    const viewModel = new APCMiniVM();
    ko.applyBindings(viewModel); // This makes Knockout get to work

    // console.log({viewModel});
});
