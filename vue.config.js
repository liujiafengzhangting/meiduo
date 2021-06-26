module.exports = {
    configureWebpack: {
        resolve: {
          alias: {
            'assets': '@/assets',
            'components': '@/components',
            'network': '@/network',
            'views': '@/views',
          }
        }
      },
    publicPath: '',
}
const express = require('express')