import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

function Pagination(props) {
    const {pages, currentPage, onPageChange} = props;

    const renderPageNumbers = () => {
        const pageNumbers = [];
        const visiblePages = pages > 5 ? 5 : pages;
        const halfVisiblePages = Math.floor(visiblePages / 2);

        let startPage = currentPage - halfVisiblePages;
        let endPage = currentPage + halfVisiblePages;

        if (startPage <= 0) {
            startPage = 1;
            endPage = visiblePages;
        }

        if (endPage > pages) {
            endPage = pages;
            startPage = pages - visiblePages + 1;
        }

        if (startPage > 1) {
            pageNumbers.push(1);
            if (startPage > 2) {
                pageNumbers.push('...');
            }
        }

        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        if (endPage < pages) {
            if (endPage < pages - 1) {
                pageNumbers.push('...');
            }
            pageNumbers.push(pages);
        }

        return pageNumbers.map((page, index) => (
            <li
                key={index}
                className={`pagination__list__item ${currentPage === page ? 'active' : ''}`}
                onClick={() => onPageChange(page)}
            >
                {page}
            </li>
        ));
    };

    return (
        <div className="pagination">
            <ul className="pagination__list">
                <li
                    className={`pagination__list__item ${currentPage === 1 ? 'disabled' : ''}`}
                    onClick={() => onPageChange(currentPage - 1)}
                >&lt;</li>
                {
                    renderPageNumbers()
                    // _.range(1, pages + 1).map(page => (
                    //     (page > 5 && page!==pages+1) ?
                    //         <li
                    //             key={page}
                    //             className="pagination__list__item"
                    //         >
                    //             ...
                    //         </li>
                    //         :
                    //         <li
                    //             key={page}
                    //             className={`pagination__list__item ${currentPage === page ? 'active' : ''}`}
                    //             onClick={() => onPageChange(page)}
                    //         >
                    //             {page}
                    //         </li>
                    // ))
                }
                <li
                    className={`pagination__list__item ${currentPage === pages ? 'disabled' : ''}`}
                    onClick={() => onPageChange(currentPage + 1)}
                >&gt;</li>
            </ul>
        </div>
    );
}

export default Pagination;

Pagination.propTypes = {
    pages: PropTypes.number.isRequired,
    currentPage: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

Pagination.defaultProps = {
    pages: 1,
    currentPage: 1,
    onClick: () => {
    }
}