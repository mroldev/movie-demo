const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey : '25a25fed838d79ac099ff3d7c61eee8d',
    originalImage: (imgPath)=> `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath)=> `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;