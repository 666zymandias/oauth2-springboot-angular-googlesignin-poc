// karma.conf.js
module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-firefox-launcher'), // <--- Plugin de Firefox
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      jasmine: {
        // Puedes añadir configuración de jasmine aquí si la necesitas
      },
      clearContext: false // deja visible la salida del Spec Runner en el navegador si lo abrieras
    },
    jasmineHtmlReporter: {
      suppressAll: true // elimina trazas duplicadas
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/ag-prueba-front'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: false,
    browsers: ['FirefoxHeadless'], // <--- Navegador configurado: Firefox sin interfaz
    singleRun: true, // Se ejecuta una vez y termina (ideal para CI/CD o scripts)
    restartOnFileChange: false
  });
};