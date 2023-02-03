const express = require('express')
const newsRouter = express.Router()
const axios = require('axios')


//passportjs za auth
//We route with this to render news.ejs
newsRouter.get('', async(req, res) => {
//res.render('news')
try {
const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&sortBy=popularity&apiKey=a177fe5c6c40474bb58cc8be0e268ca3`)
res.render('news', { articles : newsAPI.data.articles })

} catch (err){
    if(err.response){
        res.render('news', { articles : null })
        console.log(err.response.data)
        console.log(err.response.status)
        console.log(err.response.headers)
    }else if (err.request){
        res.render('news', { articles : null })
        console.log(err.request)
    }else {
        res.render('news', { articles : null })
        console.error('Error', err.message)
    }

}

})

newsRouter.get('/bulgariaNews', async(req, res) => {
    //res.render('news')
    try {
    const newsAPI = await axios.get(`https://newsapi.org/v2/top-headlines?country=bg&apiKey=a177fe5c6c40474bb58cc8be0e268ca3`)
    res.render('bulgariaNews', { articles : newsAPI.data.articles })
    
    } catch (err){
        if(err.response){
            res.render('bulgariaNews', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        }else if (err.request){
            res.render('bulgariaNews', { articles : null })
            console.log(err.request)
        }else {
            res.render('bulgariaNews', { articles : null })
            console.error('Error', err.message)
        }
    
    }
    
    })

    newsRouter.get('/gamingNews', async(req, res) => {
        //res.render('news')
        try {
        const newsAPI = await axios.get(`http://newsapi.org/v2/everything?q=gaming&apiKey=a177fe5c6c40474bb58cc8be0e268ca3`)
        res.render('gamingNews', { articles : newsAPI.data.articles })
        
        } catch (err){
            if(err.response){
                res.render('gamingNews', { articles : null })
                console.log(err.response.data)
                console.log(err.response.status)
                console.log(err.response.headers)
            }else if (err.request){
                res.render('gamingNews', { articles : null })
                console.log(err.request)
            }else {
                res.render('gamingNews', { articles : null })
                console.error('Error', err.message)
            }
        
        }
        
        })

newsRouter.post('/search', async(req, res) => {
   let search = req.body.search
    
    //let searchReal = toString(search)
    try {
        const newsAPI = await axios.get(`http://newsapi.org/v2/everything?q=${search}&apiKey=a177fe5c6c40474bb58cc8be0e268ca3`)
        res.render('newsSearch', { articles : newsAPI.data.articles })
    } catch (err) {
        if(err.response) {
            res.render('newsSearch', { articles : null })
            console.log(err.response.data)
            console.log(err.response.status)
            console.log(err.response.headers)
        } else if(err.requiest) {
            res.render('newsSearch', { articles : null })
            console.log(err.requiest)
        } else {
            res.render('newsSearch', { articles : null })
            console.error('Error', err.message)
        }
    } 
})

module.exports = newsRouter