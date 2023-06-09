import Api from './api.js';
import Pagination from 'tui-pagination';

const api = new Api();

export default pagination();

function pagination(params = {}) {
  const options = {
    itemsPerPage: 20,
    visiblePages: 5,
    page: 1,
    centerAlign: true,
    firstItemClassName: 'tui-first-child',
    lastItemClassName: 'tui-last-child',
    template: {
      page: `<a href="#" class="tui-page-btn" data-page-number="{{page}}">{{page}}</a>`,
      currentPage: `<strong class="tui-page-btn tui-is-selected" data-page-number="{{page}}">{{page}}</strong>`,
      moveButton:
        `<a href="#" class="tui-page-btn tui-{{type}}">` +
        `<span class="tui-ico-{{type}}">{{type}}</span>` +
        `</a>`,
      disabledMoveButton:
        `<span class="tui-page-btn tui-is-disabled tui-{{type}}">` +
        `<span class="tui-ico-{{type}}">{{type}}</span>` +
        `</span>`,
      moreButton:
        `<a href="#" class="tui-page-btn tui-{{type}}-is-ellip">` +
        `<span class="tui-ico-ellip">...</span>` +
        `</a>`,
    },
  };

  return new Pagination(pag, { ...options, ...params });
}