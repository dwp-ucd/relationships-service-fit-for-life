

module.exports = router => {

//***** Propose Relationship ****** //

router.post('/appointee/iteration-3/', function (req, res) {
  // Prototype information
  req.session.data['iteration-number'] = 3;
  // Relationship information
  req.session.data['relationship-decision-day'] = 14;
  req.session.data['relationship-decision-month'] = 'July';
  req.session.data['relationship-decision-year'] = 2022;
  req.session.data['relationship-declined-reason'] = 'Unsuitable';
  // Customer information
  req.session.data['customer-title'] = 'Ms';
  req.session.data['customer-name'] = 'Jennifer Coles';
  req.session.data['customer-national-insurance'] = 'JK151617B';
  req.session.data['customer-dob'] = '16 January 1969';
  req.session.data['customer-gender'] = 'Female';
  req.session.data['customer-correspondence-line-1'] = '7 Acacia Avenue';
  req.session.data['customer-correspondence-line-2'] = 'Gateshead';
  req.session.data['customer-correspondence-line-3'] = 'Tyne and Wear';
  req.session.data['customer-correspondence-postcode'] = 'NE1 2BA';
  req.session.data['customer-correspondence-country'] = 'England';
  req.session.data['customer-residential-line-1'] = '7 Acacia Avenue';
  req.session.data['customer-residential-line-2'] = 'Gateshead';
  req.session.data['customer-residential-line-3'] = 'Tyne and Wear';
  req.session.data['customer-residential-postcode'] = 'NE1 2BA';
  req.session.data['customer-residential-country'] = 'England';
  req.session.data['customer-number-mobile'] = '07761 111111';
  req.session.data['customer-number-home'] = '07191 111111';
  // Appointee information
  req.session.data['appointee-title'] = 'Mr';
  req.session.data['appointee-name'] = 'James Coles';
  req.session.data['appointee-national-insurance'] = 'LM181920C';
  req.session.data['appointee-dob'] = '24 March 1993';
  req.session.data['appointee-postcode'] = 'AB13 1ZX';
  req.session.data['appointee-gender'] = 'Male';
  req.session.data['appointee-number'] = '07791 178231';
  // Don't touch
  req.session.data['relationship-review-5-years'] = req.session.data['relationship-decision-year']+5;
  req.session.data['relationship-review-8-years'] = req.session.data['relationship-decision-year']+8;
  req.session.data['relationship-decision-date'] = req.session.data['relationship-decision-day'] + ' ' + req.session.data['relationship-decision-month'] + ' ' + req.session.data['relationship-decision-year'];
  req.session.data['relationship-5-year-date'] = req.session.data['relationship-decision-day'] + ' ' + req.session.data['relationship-decision-month'] + ' ' + req.session.data['relationship-review-5-years'];
  req.session.data['relationship-8-year-date'] = req.session.data['relationship-decision-day'] + ' ' + req.session.data['relationship-decision-month'] + ' ' + req.session.data['relationship-review-8-years'];
  req.session.data['relationship-review-year'] = req.session.data['relationship-decision-year'];
  // End of information
  if (req.session.data['journey-choice'] == 'propose') {
    res.redirect('/appointee/iteration-3/searchlight/');
  } else {
    res.redirect('/appointee/iteration-3/task/');
  }
});

router.post('/appointee/iteration-3/searchlight/', function (req, res) {
  res.redirect('/appointee/iteration-3/searchlight/result');
});

router.post('/appointee/iteration-3/searchlight/result', function (req, res) {
  res.redirect('/appointee/iteration-3/propose/');
});

router.post('/appointee/iteration-3/propose/', function (req, res) {
  if (req.session.data['appointee-nino-choice'] == 'yes') {
    res.redirect('/appointee/iteration-3/propose/nino');
  } else {
    res.redirect('/appointee/iteration-3/propose/details');
  }
});

router.post('/appointee/iteration-3/propose/nino', function (req, res) {
  res.redirect('/appointee/iteration-3/propose/summary');
});

router.post('/appointee/iteration-3/propose/details', function (req, res) {
  res.redirect('/appointee/iteration-3/propose/summary');
});

//router.post('/appointee/iteration-3/propose/appointee-correct', function (req, res) {
//  if (req.session.data.appointeeCorrect == 'appointee-correct-yes') {
//    req.session.data.relationshipStatus = 'asserted';
//    res.redirect('/appointee/iteration-3/propose/confirmation');
//  } else {
//    req.session.data.authorisedUser = null;
//    res.redirect('/appointee/iteration-3/propose/');
//  }
//});

router.post('/appointee/iteration-3/propose/summary', function (req, res) {
  req.session.data.relationshipStatus = 'asserted';
  res.redirect('/appointee/iteration-3/searchlight/relationships');
});

// ****** Verify Relationship ******* //

router.post('/appointee/iteration-3/task/', function (req, res) {
  res.redirect('/appointee/iteration-3/verify/');
});

router.post('/appointee/iteration-3/verify/', function (req, res) {
  if (req.session.data['verified-appointeeship'] == 'verified') {
    req.session.data.relationshipStatus = 'verified';
    res.redirect('/appointee/iteration-3/verify/verified/');
  } else {
    req.session.data.relationshipStatus = 'declined';
    res.redirect('/appointee/iteration-3/verify/declined/');
  }
});

// Verified

router.post('/appointee/iteration-3/verify/verified/', function (req, res) {
  if (req.session.data['verified-date'] == 'today') {
    res.redirect('/appointee/iteration-3/verify/verified/review-date');
  } else {
    res.redirect('/appointee/iteration-3/verify/verified/date');
  }
});

router.post('/appointee/iteration-3/verify/verified/review-date', function (req, res) {
  if (req.session.data['review-date'] == 'custom') {
    res.redirect('/appointee/iteration-3/verify/verified/custom-review-date');
  } else {
    if (req.session.data['review-date'] == 'five-years') {
      req.session.data['review-date'] = 5;
    } else {
      req.session.data['review-date'] = 8;
    }
    req.session.data['relationship-review-year'] = req.session.data['relationship-decision-year']+req.session.data['review-date'];
    req.session.data['relationship-review-date'] = req.session.data['relationship-decision-day'] + ' ' + req.session.data['relationship-decision-month'] + ' ' + req.session.data['relationship-review-year'];
    res.redirect('/appointee/iteration-3/verify/verified/summary');
  }
});

router.post('/appointee/iteration-3/verify/verified/date', function (req, res) {
  res.redirect('/appointee/iteration-3/verify/verified/review-date');
});

router.post('/appointee/iteration-3/verify/verified/custom-review-date', function (req, res) {
  res.redirect('/appointee/iteration-3/verify/verified/summary');
});

router.post('/appointee/iteration-3/verify/verified/summary', function (req, res) {
  res.redirect('/appointee/iteration-3/searchlight/verified');
});

// Declined

router.post('/appointee/iteration-3/verify/declined/', function (req, res) {
  if (req.session.data['declined-date'] == 'today') {
    res.redirect('/appointee/iteration-3/verify/declined/reason');
  } else {
    res.redirect('/appointee/iteration-3/verify/declined/date');
  }
});

router.post('/appointee/iteration-3/verify/declined/reason', function (req, res) {
  res.redirect('/appointee/iteration-3/verify/declined/summary');
});

router.post('/appointee/iteration-3/verify/declined/date', function (req, res) {
  res.redirect('/appointee/iteration-3/verify/declined/reason');
});

router.post('/appointee/iteration-3/verify/declined/summary', function (req, res) {
  res.redirect('/appointee/iteration-3/searchlight/relationships');
});

}