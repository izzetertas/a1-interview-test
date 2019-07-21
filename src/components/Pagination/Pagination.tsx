import React from 'react'
import './Pagination.scss'

type PaginationProps = {
  pageNumber: number
  pageSize: number
  totalResult: number
  onClick?: (pageNumber: number) => void
}

export default function Pagination(props: PaginationProps) {
  const { pageNumber, pageSize = 10, totalResult } = props
  const pageCount = Math.ceil(totalResult / pageSize)

  const handleClick = (value: number) => {
    if (props.onClick) props.onClick(value)
  }

  if (totalResult === 0) return null

  return ( 
    <div className='pagination-container'>
      <button
        disabled={pageNumber === 1}
        onClick={() => handleClick(1)}
      >
        First
      </button>
      <button
        disabled={pageNumber === 1}
        onClick={() => handleClick(pageNumber - 1)}
      >
        Previous
      </button>
      <span>Page {pageNumber} of {pageCount}</span>
      <button
        disabled={pageNumber === pageCount}
        onClick={() => handleClick(pageNumber + 1)}>
        Next
      </button>
      <button
        disabled={pageNumber === pageCount}
        onClick={() => handleClick(pageCount)}
      >
        Last
      </button>
    </div>
  )

}
