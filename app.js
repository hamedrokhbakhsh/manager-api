const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser')

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const loginRouter = require('./routes/login');
const getAllReportStatusRouter = require('./routes/get-all-report-status');
const getAllDataFilterRouter = require('./routes/get-organization-unit');
const getCreditorAmountsLimitRouter = require('./routes/get-creditor-amounts-limit')
const getDebtorAmountsLimitRouter = require('./routes/get-debtor-amount-limit');
const getPoolReceptionLimitRouter = require('./routes/get_pool_reception_limit') ;

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin' , '*');
  res.header('Access-Control-Allow-Headers' ,
      'Origin, X-Requested-With, Content-Type, Accept , Authorization'
  );
  if (req === 'OPTIONS'){
    res.header('Access-Control-Allow-Methods' , 'POST')
    return res.status(200).json({});
  }
  next();
})



app.use('/', indexRouter);

app.use('/login' , loginRouter);//login for manager
app.use('/get-all-report-status' , getAllReportStatusRouter); //get all status in first pages of manager app
app.use('/get-all-data-filter' , getAllDataFilterRouter); //get all organization units for filter
app.use('/get-creditor-amounts-limit' , getCreditorAmountsLimitRouter); //get limit creditor
app.use('/get-debtor-amounts-limit', getDebtorAmountsLimitRouter);
app.use('/get-pool-reception-limit' , getPoolReceptionLimitRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
