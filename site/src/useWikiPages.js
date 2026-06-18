import { useEffect, useState } from 'react'

const FIXED_SLUGS = ['about', 'resources', 'contributing']

const getContentIndexUrl = () => `${import.meta.env.BASE_URL || '/'}content-index.json`

export default function useWikiPages() {
  const [pages, setPages] = useState([])

  useEffect(() => {
    fetch(getContentIndexUrl())
      .then((response) => (response.ok ? response.json() : []))
      .then((data) => {
        if (Array.isArray(data)) {
          setPages(data.filter((page) => !FIXED_SLUGS.includes(page.slug)))
        } else {
          setPages([])
        }
      })
      .catch(() => {
        setPages([])
      })
  }, [])

  return pages
}
