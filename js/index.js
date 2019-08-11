/* header */
new Typewriter('#typewriter', {
  strings: ['Hello', 'World'],
  autoStart: true,
  loop: true,
});

/* portfolio section */
var elem = document.querySelector('.grid');
var iso = new Isotope( elem, {
  // options
  itemSelector: '.grid-item',
  layoutMode: 'packery'
});

/* skills section */
var bar1 = new ProgressBar.Line(htmlBar, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#dacdd0',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      color: '#999',
      position: 'absolute',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar1.animate(1.0); 

var bar2 = new ProgressBar.Line(cssBar, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#dacdd0',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      color: '#999',
      position: 'absolute',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar2.animate(0.9); 

var bar3 = new ProgressBar.Line(gitBar, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#dacdd0',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      color: '#999',
      position: 'absolute',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar3.animate(0.8); 

var bar4 = new ProgressBar.Line(jsBar, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#dacdd0',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      color: '#999',
      position: 'absolute',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar4.animate(0.7); 

var bar5 = new ProgressBar.Line(nodeBar, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#dacdd0',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      color: '#999',
      position: 'absolute',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar5.animate(0.6); 

var bar6 = new ProgressBar.Line(reactBar, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 1400,
  color: '#dacdd0',
  trailColor: '#eee',
  trailWidth: 1,
  svgStyle: {width: '100%', height: '100%'},
  text: {
    style: {
      color: '#999',
      position: 'absolute',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  from: {color: '#FFEA82'},
  to: {color: '#ED6A5A'},
  step: (state, bar) => {
    bar.setText(Math.round(bar.value() * 100) + ' %');
  }
});

bar6.animate(0.5); 