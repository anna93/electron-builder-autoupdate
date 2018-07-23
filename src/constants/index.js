const constants = {
  // renderer -> main (UI Thread -> Main Thread)
  START_UPLOAD: 'start-upload', // renderer -> main
  PAUSE_UPLOAD: 'pause-upload', // renderer -> main
  RESUME_UPLOAD: 'resume-upload', // renderer -> main
  STOP_UPLOAD: 'stop-upload', // renderer -> main

  IS_COOKIE_VALID: 'is-cookie-valid', // initiates cookie validation process in main
  REMOVE_COOKIE: 'remove-cookie', // used for loggin out and destroying cookie and user data

  SERVER_PROXY: 'server-proxy',  // renderer -> main



  // main -> renderer (Main Thread -> UI Thread)
  ACK_START_UPLOAD: 'ack-start-upload',
  ACK_PAUSE_UPLOAD: 'ack-pause-upload',
  ACK_RESUME_UPLOAD: 'ack-resume-upload',
  ACK_STOP_UPLOAD: 'ack-stop-upload',
  UPLOAD_PROGRESS: 'upload-progress',
  UPLOAD_FINISHED: 'upload-finished',
  UPLOAD_FAILED: 'upload-failed',

  COOKIE_VALIDITY_STATUS: 'cookie-validity-status',  // Auth Event, this lets the renderer know that whether auth data is valid or not

  SERVER_PROXY_RESULT: 'server-proxy-result',  // temporary proxy mechanism from server side, till cors gets enabled on apiserver



  // upload statuses
  INIT: 'init',
  STARTED: 'started',
  PAUSED: 'paused',
  STOPPED: 'stopped',
  SUCCESSFUL: 'successful',
  FAILED: 'failed',

  UPLOAD_SERVICE_HOST: 'http://10.33.117.240:28223',
  APP_OPENER_PROTOCOL: 'kbc12345',
  EXTERNAL_AUTH_URL: 'https://github.fkinternal.com/pages/shekharflip/logme-in/',
  AUTH_VALIDITY_URL: 'http://fdp.fkinternal.com/s/fdp/valid',
  AUTH_DATA_FILE_NAME: 'user-data.json',

}

export default constants
