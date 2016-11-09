export default class Chart {
    private _chartElement: HTMLElement | null;
    private _width: number;

    constructor(private _containerId: string, private _dataFilePath: string, private _maxWidth: number) {
        this._containerId = _containerId;
        this._chartElement = null;
        this._maxWidth = _maxWidth;
        this._dataFilePath = _dataFilePath;
    }

    public spawnChart() {
        let el = document.createElement('div');
        el.classList.add('ceb-chart');
        el.classList.add('ceb-chart_container');

        this._chartElement = el;
        this.addChartToDom(el);
    }

    private addChartToDom(chart: HTMLElement, containerId: string = this._containerId) {
        let container = document.getElementById(containerId);

        if (!container) {
            console.error('Element not found. Please check your Element ID.')
            return;
        }

        container.parentNode.insertBefore(chart, container.nextSibling);
    }

    set chartWidth( cWidth: number ) {
        if (cWidth < 0) {
            throw new Error( "The chart must be at least 0 pixels big")
        }

        ( this )._width = cWidth
    }
}