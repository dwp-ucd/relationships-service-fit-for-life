

module.exports = router => {

  //***** Propose Relationship ****** //
  
  router.post('/appointee/iteration-8/', function (req, res) {
    // Prototype information
    req.session.data['iteration-number'] = 8;
    // Relationship information
    req.session.data['relationship-decision-day'] = 6;
    req.session.data['relationship-decision-month'] = 'December';
    req.session.data['relationship-decision-year'] = 2022;
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
    req.session.data['customer-correspondence-country'] = '';
    req.session.data['customer-residential-line-1'] = '7 Acacia Avenue';
    req.session.data['customer-residential-line-2'] = 'Gateshead';
    req.session.data['customer-residential-line-3'] = 'Tyne and Wear';
    req.session.data['customer-residential-postcode'] = 'NE1 2BA';
    req.session.data['customer-residential-country'] = '';
    req.session.data['customer-number-mobile'] = '07761 111111';
    req.session.data['customer-number-home'] = '07191 111111';
    // Appointee information
    req.session.data['appointee-title'] = 'Mr';
    req.session.data['appointee-name'] = 'James Coles';
    req.session.data['appointee-national-insurance'] = 'LM181920C';
    req.session.data['appointee-dob'] = '24 March 1993';
    req.session.data['appointee-gender'] = 'Male';
    req.session.data['appointee-correspondence-line-1'] = '9 Henry Avenue';
    req.session.data['appointee-correspondence-line-2'] = 'Gateshead';
    req.session.data['appointee-correspondence-line-3'] = 'Tyne and Wear';
    req.session.data['appointee-correspondence-postcode'] = 'NE1 1ZX';
    req.session.data['appointee-correspondence-country'] = '';
    req.session.data['appointee-residential-line-1'] = '9 Henry Avenue';
    req.session.data['appointee-residential-line-2'] = 'Gateshead';
    req.session.data['appointee-residential-line-3'] = 'Tyne and Wear';
    req.session.data['appointee-residential-postcode'] = 'NE1 1ZX';
    req.session.data['appointee-residential-country'] = '';
    req.session.data['appointee-number-mobile'] = '07791 178231';
    req.session.data['appointee-number-home'] = '07791 222333';
    // Don't touch
    req.session.data['relationship-review-5-years'] = req.session.data['relationship-decision-year']+5;
    req.session.data['relationship-review-8-years'] = req.session.data['relationship-decision-year']+8;
    req.session.data['relationship-decision-date'] = req.session.data['relationship-decision-day'] + ' ' + req.session.data['relationship-decision-month'] + ' ' + req.session.data['relationship-decision-year'];
    req.session.data['relationship-5-year-date'] = req.session.data['relationship-decision-day'] + ' ' + req.session.data['relationship-decision-month'] + ' ' + req.session.data['relationship-review-5-years'];
    req.session.data['relationship-8-year-date'] = req.session.data['relationship-decision-day'] + ' ' + req.session.data['relationship-decision-month'] + ' ' + req.session.data['relationship-review-8-years'];
    req.session.data['relationship-review-year'] = req.session.data['relationship-decision-year'];
    req.session.data['customer-residential-address'] = req.session.data['customer-residential-line-1'] + ', ' +  req.session.data['customer-residential-line-2'] + ', ' +  req.session.data['customer-residential-line-3'] + ', ' +  req.session.data['customer-residential-postcode'] + ', ' +  req.session.data['customer-residential-country'];
    req.session.data['appointee-residential-address'] = req.session.data['appointee-residential-line-1'] + ', ' +  req.session.data['appointee-residential-line-2'] + ', ' +  req.session.data['appointee-residential-line-3'] + ', ' +  req.session.data['appointee-residential-postcode'] + ', ' +  req.session.data['appointee-residential-country'];
      // End of information
    res.redirect('/appointee/iteration-8/searchlight/');
  });
  
  router.post('/appointee/iteration-8/searchlight/', function (req, res) {
    if (req.session.data['journey-choice'] == 'authorise') {
      res.redirect('/appointee/iteration-8/searchlight/customer/proposed');
    } else { 
      res.redirect('/appointee/iteration-8/searchlight/customer/');
    }
  });
  
  router.post('/appointee/iteration-8/searchlight/customer/', function (req, res) {
    res.redirect('/appointee/iteration-8/propose/details');
  });
  
  router.post('/appointee/iteration-8/propose/', function (req, res) {
    if (req.session.data['appointee-nino-choice'] == 'yes') {
      res.redirect('/appointee/iteration-8/propose/nino');
    } else {
      res.redirect('/appointee/iteration-8/propose/details');
    }
  });
  
  router.post('/appointee/iteration-8/propose/nino', function (req, res) {
    res.redirect('/appointee/iteration-8/propose/summary');
  });
  
  router.post('/appointee/iteration-8/propose/details', function (req, res) {
    if (req.session.data['journey-choice'] == 'propose') {
      res.redirect('/appointee/iteration-8/propose/summary');
    } else if (req.session.data['journey-choice'] == 'scenario-2') {
      res.redirect('/appointee/iteration-8/service/service-down');
    } else {
      res.redirect('/appointee/iteration-8/service/no-match-found');
    }
  });
  
  
  
  
  //router.post('/appointee/iteration-8/propose/appointee-correct', function (req, res) {
  //  if (req.session.data.appointeeCorrect == 'appointee-correct-yes') {
  //    req.session.data.relationshipStatus = 'asserted';
  //    res.redirect('/appointee/iteration-8/propose/confirmation');
  //  } else {
  //    req.session.data.authorisedUser = null;
  //    res.redirect('/appointee/iteration-8/propose/');
  //  }
  //});
  
  router.post('/appointee/iteration-8/propose/summary', function (req, res) {
    req.session.data.relationshipStatus = 'asserted';
    res.redirect('/appointee/iteration-8/searchlight/customer/proposed');
  });
  
  router.post('/appointee/iteration-8/searchlight/customer/proposed', function (req, res) {
    req.session.data['journey-choice'] = 'authorise';
    res.redirect('/appointee/iteration-8/authorise/');
  });

  router.post('/appointee/iteration-8/searchlight/appointee/proposed', function (req, res) {
    req.session.data['journey-choice'] = 'authorise';
    res.redirect('/appointee/iteration-8/authorise/');
  });
  
  // ****** Authorise Relationship ******* //
  
  router.post('/appointee/iteration-8/searchlight/customer/proposed', function (req, res) {
    res.redirect('/appointee/iteration-8/authorise/');
  });
  
  router.post('/appointee/iteration-8/authorise/', function (req, res) {
    res.redirect('/appointee/iteration-8/authorise/decision-date');
  });
  
  router.post('/appointee/iteration-8/authorise/decision-date', function (req, res) {
    if (req.session.data['decision-date'] == 'today') {
      if (req.session.data['verified-appointeeship'] == 'authorised') {
        req.session.data.relationshipStatus = 'authorised';
        res.redirect('/appointee/iteration-8/authorise/authorised/review-date');
      } else {
        req.session.data.relationshipStatus = 'not-authorised';
        res.redirect('/appointee/iteration-8/authorise/not-authorised/summary');
      }
    } else {
      res.redirect('/appointee/iteration-8/authorise/decision-date-manual');
    }
  });
  
  router.post('/appointee/iteration-8/authorise/decision-date-manual', function (req, res) {
    if (req.session.data['verified-appointeeship'] == 'authorised') {
      req.session.data.relationshipStatus = 'authorised';
      res.redirect('/appointee/iteration-8/authorise/authorised/review-date');
    } else {
      req.session.data.relationshipStatus = 'not-authorised';
      res.redirect('/appointee/iteration-8/authorise/not-authorised/summary');
    }
  });
  
  // Authorised
  
  router.post('/appointee/iteration-8/authorise/authorised/', function (req, res) {
    if (req.session.data['verified-date'] == 'today') {
      res.redirect('/appointee/iteration-8/authorise/authorised/review-date');
    } else {
      res.redirect('/appointee/iteration-8/authorise/authorised/date');
    }
  });
  
  router.post('/appointee/iteration-8/authorise/authorised/review-date', function (req, res) {
    if (req.session.data['review-date'] == 'custom') {
      res.redirect('/appointee/iteration-8/authorise/authorised/custom-review-date');
    } else {
      if (req.session.data['review-date'] == 'five-years') {
        req.session.data['review-date'] = 5;
      } else {
        req.session.data['review-date'] = 8;
      }
      req.session.data['relationship-review-year'] = req.session.data['relationship-decision-year']+req.session.data['review-date'];
      req.session.data['relationship-review-date'] = req.session.data['relationship-decision-day'] + ' ' + req.session.data['relationship-decision-month'] + ' ' + req.session.data['relationship-review-year'];
      res.redirect('/appointee/iteration-8/authorise/authorised/summary');
    }
  });
  
  router.post('/appointee/iteration-8/authorise/authorised/date', function (req, res) {
    res.redirect('/appointee/iteration-8/authorise/authorised/review-date');
  });
  
  router.post('/appointee/iteration-8/authorise/authorised/custom-review-date', function (req, res) {
    res.redirect('/appointee/iteration-8/authorise/authorised/summary');
  });
  
  router.post('/appointee/iteration-8/authorise/authorised/summary', function (req, res) {
    res.redirect('/appointee/iteration-8/searchlight/customer/authorised');
  });
  
  // Declined
  
  router.post('/appointee/iteration-8/authorise/not-authorised/', function (req, res) {
    if (req.session.data['declined-date'] == 'today') {
      res.redirect('/appointee/iteration-8/authorise/not-authorised/summary');
    } else {
      res.redirect('/appointee/iteration-8/authorise/not-authorised/date');
    }
  });
  
  router.post('/appointee/iteration-8/authorise/not-authorised/date', function (req, res) {
    res.redirect('/appointee/iteration-8/authorise/not-authorised/summary');
  });
  
  router.post('/appointee/iteration-8/authorise/not-authorised/summary', function (req, res) {
    res.redirect('/appointee/iteration-8/searchlight/customer/not-authorised');
  });
  
  // Change
  
  router.post('/appointee/iteration-8/propose/change/details', function (req, res) {
    // changed values
    req.session.data['appointee-dob'] = '25 March 1993';
    res.redirect('/appointee/iteration-8/propose/change/summary');
  });
  
  router.post('/appointee/iteration-8/propose/change/summary', function (req, res) {
    req.session.data.relationshipStatus = 'asserted';
    res.redirect('/appointee/iteration-8/searchlight/customer/proposed');
  });
  
  }
  