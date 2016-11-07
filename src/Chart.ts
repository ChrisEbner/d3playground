export default class Chart {
    private _containerId: string;
    private _chartElement: HTMLElement | null;
    private _maxWidth: number;
    private _dataFilePath: string;

    constructor(containerId: string, dataFilePath: string, maxWidth: number) {
        this._containerId = containerId;
        this._chartElement = null;
        this._maxWidth = maxWidth;
        this._dataFilePath = dataFilePath;
    }

    public createChart() {
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
}