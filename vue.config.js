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
      }
}
const express = require('express')