const router = require('express').Router()
const { Movie, Song } = require('../controllers')

router.get('/', (req, res) => {
  res.render('home', {
    name: 'John Doe'
  })
})

// movie routes have to start with /api but this do not
router.get('/movies', (req, res) => {
  Movie.getMovies(movies => {
    // pass in an object, since movie is an array so use {}
    res.render('movies', { movies })
  })
})

// same thing with song
router.get('/songs', (req, res) => {
  Song.getSongs(songs => {
    res.render('songs', { songs })
  })
})

module.exports = router
