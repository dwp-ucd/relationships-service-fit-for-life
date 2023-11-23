

module.exports = router => {

//***** Propose Relationship ****** //

router.post('/appointee/iteration-6/', function (req, res) {
  // Prototype information
  req.session.data['iteration-number'] = 6;
  // Relationship information
  req.session.data['relationship-decision-day'] = 27;
  req.session.data['relationship-decision-month'] = 'October';
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
  req.session.data['appointee-address-line-1'] = '9 Henry Avenue';
  req.session.data['appointee-address-line-2'] = 'Gateshead';
  req.session.data['appointee-address-line-3'] = 'Tyne and Wear';
  req.session.data['appointee-address-postcode'] = 'AB13 1ZX';
  req.session.data['appointee-address-country'] = 'England';
  req.session.data['appointee-gender'] = 'Male';
  req.session.data['appointee-number'] = '07791 178231';
  // Don't touch
  req.session.data['relationship-review-5-years'] = req.session.data['relationship-decision-year']+5;
  req.session.data['relationship-review-8-years'] = req.session.data['relationship-decision-year']+8;
  req.session.data['relationship-decision-date'] = req.session.data['relationship-decision-day'] + ' ' + req.session.data['relationship-decision-month'] + ' ' + req.session.data['relationship-decision-year'];
  req.session.data['relationship-5-year-date'] = req.session.data['relationship-decision-day'] + ' ' + req.session.data['relationship-decision-month'] + ' ' + req.session.data['relationship-review-5-years'];
  req.session.data['relationship-8-year-date'] = req.session.data['relationship-decision-day'] + ' ' + req.session.data['relationship-decision-month'] + ' ' + req.session.data['relationship-review-8-years'];
  req.session.data['relationship-review-year'] = req.session.data['relationship-decision-year'];
  req.session.data['customer-residential-address'] = req.session.data['customer-residential-line-1'] + ', ' +  req.session.data['customer-residential-line-2'] + ', ' +  req.session.data['customer-residential-line-3'] + ', ' +  req.session.data['customer-residential-postcode'] + ', ' +  req.session.data['customer-residential-country'];
  req.session.data['appointee-address'] = req.session.data['appointee-address-line-1'] + ', ' +  req.session.data['appointee-address-line-2'] + ', ' +  req.session.data['appointee-address-line-3'] + ', ' +  req.session.data['appointee-address-postcode'] + ', ' +  req.session.data['appointee-address-country'];
  // End of information
  if (req.session.data['journey-choice'] == 'propose') {
    res.redirect('/appointee/iteration-6/propose/searchlight/');
  } else if (req.session.data['journey-choice'] == 'authorise') {
    res.redirect('/appointee/iteration-6/authorise/searchlight');
  } else {
    res.redirect('/appointee/iteration-6/scenario/searchlight/');
  }
});

router.post('/appointee/iteration-6/propose/searchlight/', function (req, res) {
  res.redirect('/appointee/iteration-6/propose/searchlight/result');
});

router.post('/appointee/iteration-6/propose/searchlight/result', function (req, res) {
  res.redirect('/appointee/iteration-6/propose/details');
});

router.post('/appointee/iteration-6/propose/', function (req, res) {
  if (req.session.data['appointee-nino-choice'] == 'yes') {
    res.redirect('/appointee/iteration-6/propose/nino');
  } else {
    res.redirect('/appointee/iteration-6/propose/details');
  }
});

router.post('/appointee/iteration-6/propose/nino', function (req, res) {
  res.redirect('/appointee/iteration-6/propose/summary');
});

router.post('/appointee/iteration-6/propose/details', function (req, res) {
  res.redirect('/appointee/iteration-6/propose/summary');
});

//router.post('/appointee/iteration-6/propose/appointee-correct', function (req, res) {
//  if (req.session.data.appointeeCorrect == 'appointee-correct-yes') {
//    req.session.data.relationshipStatus = 'asserted';
//    res.redirect('/appointee/iteration-6/propose/confirmation');
//  } else {
//    req.session.data.authorisedUser = null;
//    res.redirect('/appointee/iteration-6/propose/');
//  }
//});

router.post('/appointee/iteration-6/propose/summary', function (req, res) {
  req.session.data.relationshipStatus = 'asserted';
  res.redirect('/appointee/iteration-6/propose/searchlight/proposed');
});

router.post('/appointee/iteration-6/propose/searchlight/proposed', function (req, res) {
  res.redirect('/appointee/iteration-6/authorise/');
});

// ****** Authorise Relationship ******* //

router.post('/appointee/iteration-6/authorise/searchlight/', function (req, res) {
  res.redirect('/appointee/iteration-6/authorise/searchlight/proposed');
});

router.post('/appointee/iteration-6/authorise/searchlight/proposed', function (req, res) {
  res.redirect('/appointee/iteration-6/authorise/');
});

router.post('/appointee/iteration-6/authorise/', function (req, res) {
  res.redirect('/appointee/iteration-6/authorise/decision-date');
});

router.post('/appointee/iteration-6/authorise/decision-date', function (req, res) {
  if (req.session.data['decision-date'] == 'today') {
    if (req.session.data['verified-appointeeship'] == 'authorised') {
      req.session.data.relationshipStatus = 'authorised';
      res.redirect('/appointee/iteration-6/authorise/authorised/review-date');
    } else {
      req.session.data.relationshipStatus = 'not-authorised';
      res.redirect('/appointee/iteration-6/authorise/not-authorised/reason');
    }
  } else {
    res.redirect('/appointee/iteration-6/authorise/decision-date-manual');
  }
});

router.post('/appointee/iteration-6/authorise/decision-date-manual', function (req, res) {
  if (req.session.data['verified-appointeeship'] == 'authorised') {
    req.session.data.relationshipStatus = 'authorised';
    res.redirect('/appointee/iteration-6/authorise/authorised/review-date');
  } else {
    req.session.data.relationshipStatus = 'not-authorised';
    res.redirect('/appointee/iteration-6/authorise/not-authorised/reason');
  }
});

// Authorised

router.post('/appointee/iteration-6/authorise/authorised/', function (req, res) {
  if (req.session.data['verified-date'] == 'today') {
    res.redirect('/appointee/iteration-6/authorise/authorised/review-date');
  } else {
    res.redirect('/appointee/iteration-6/authorise/authorised/date');
  }
});

router.post('/appointee/iteration-6/authorise/authorised/review-date', function (req, res) {
  if (req.session.data['review-date'] == 'custom') {
    res.redirect('/appointee/iteration-6/authorise/authorised/custom-review-date');
  } else {
    if (req.session.data['review-date'] == 'five-years') {
      req.session.data['review-date'] = 5;
    } else {
      req.session.data['review-date'] = 8;
    }
    req.session.data['relationship-review-year'] = req.session.data['relationship-decision-year']+req.session.data['review-date'];
    req.session.data['relationship-review-date'] = req.session.data['relationship-decision-day'] + ' ' + req.session.data['relationship-decision-month'] + ' ' + req.session.data['relationship-review-year'];
    res.redirect('/appointee/iteration-6/authorise/authorised/summary');
  }
});

router.post('/appointee/iteration-6/authorise/authorised/date', function (req, res) {
  res.redirect('/appointee/iteration-6/authorise/authorised/review-date');
});

router.post('/appointee/iteration-6/authorise/authorised/custom-review-date', function (req, res) {
  res.redirect('/appointee/iteration-6/authorise/authorised/summary');
});

router.post('/appointee/iteration-6/authorise/authorised/summary', function (req, res) {
  res.redirect('/appointee/iteration-6/authorise/searchlight/authorised');
});

// Declined

router.post('/appointee/iteration-6/authorise/not-authorised/', function (req, res) {
  if (req.session.data['declined-date'] == 'today') {
    res.redirect('/appointee/iteration-6/authorise/not-authorised/reason');
  } else {
    res.redirect('/appointee/iteration-6/authorise/not-authorised/date');
  }
});

router.post('/appointee/iteration-6/authorise/not-authorised/reason', function (req, res) {
  res.redirect('/appointee/iteration-6/authorise/not-authorised/summary');
});

router.post('/appointee/iteration-6/authorise/not-authorised/date', function (req, res) {
  res.redirect('/appointee/iteration-6/authorise/not-authorised/reason');
});

router.post('/appointee/iteration-6/authorise/not-authorised/summary', function (req, res) {
  res.redirect('/appointee/iteration-6/authorise/searchlight/not-authorised');
});

// ****** Scenario 1 - No match found ******* //

router.post('/appointee/iteration-6/scenario/searchlight/', function (req, res) {
  res.redirect('/appointee/iteration-6/scenario/searchlight/result');
});

router.post('/appointee/iteration-6/scenario/searchlight/result', function (req, res) {
  res.redirect('/appointee/iteration-6/scenario/propose/details');
});

router.post('/appointee/iteration-6/scenario/propose/details', function (req, res) {
  res.redirect('/appointee/iteration-6/scenario/service/no-match-found');
});

// ****** Scenario 2 - Matching API down ******* //

router.post('/appointee/iteration-6/scenario-2/searchlight/', function (req, res) {
  res.redirect('/appointee/iteration-6/scenario-2/searchlight/result');
});

router.post('/appointee/iteration-6/scenario-2/searchlight/result', function (req, res) {
  res.redirect('/appointee/iteration-6/scenario-2/propose/');
});

router.post('/appointee/iteration-6/scenario-2/propose/', function (req, res) {
  res.redirect('/appointee/iteration-6/scenario-2/service/problem-with-service');
});


// Change

router.post('/appointee/iteration-6/propose/change/details', function (req, res) {
  // changed values
  req.session.data['appointee-dob'] = '25 March 1993';
  res.redirect('/appointee/iteration-6/propose/change/summary');
});

router.post('/appointee/iteration-6/propose/change/summary', function (req, res) {
  req.session.data.relationshipStatus = 'asserted';
  res.redirect('/appointee/iteration-6/propose/searchlight/proposed');
});

}
