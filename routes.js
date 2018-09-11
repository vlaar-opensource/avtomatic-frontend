module.exports = () => {
    return {
      '/': { page: '/' },
      '/404': { page: '/404' },
      '/about': { page: '/about' },
      '/bidding-room/:number': {page: '/bidding-room'}
    }
  }