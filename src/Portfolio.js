class Portfolio {
  constructor (filters, selected = true, onSelectFilter) {
    this.filters = filters;
    this.selected = selected;
    this.onSelectFilter = onSelectFilter;
  }
}

export default Portfolio;