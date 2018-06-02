// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,

  firebase: {
    apiKey: 'AIzaSyDvemNQbq6jb5ngsx7-zt_UOS8KAIU2L3w',
    authDomain: 'dentist-9981d.firebaseapp.com',
    databaseURL: 'https://dentist-9981d.firebaseio.com',
    projectId: 'dentist-9981d',
    storageBucket: 'dentist-9981d.appspot.com',
    messagingSenderId: '393178903783'
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
