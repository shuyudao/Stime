module.exports = {
  presets: [
    '@vue/app',
  ],
  plugins:[
      [
        "prismjs",
        {
          "languages": ["javascript", "css", "markup","php","java","python"],
          "plugins": [],
          "theme": "okaidia",
          "css": true
        }
      ]
    ]
}
