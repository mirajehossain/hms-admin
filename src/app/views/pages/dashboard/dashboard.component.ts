import { Component, OnInit } from '@angular/core';
export let single = [
  {
    name: 'Saturday',
    value: 250
  },
  {
    name: 'Sunday',
    value: 334
  },
  {
    name: 'Monday',
    value: 542
  }
];
export let single1 = [
  {
    name: 'Doctor',
    value: 154
  },
  {
    name: 'Patient',
    value: 2030
  },
  {
    name: 'Serve Patient',
    value: 3244
  },
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  single: any[];
  view: any[] = [500, 300];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = false;
  showXAxisLabel = true;
  yAxisLabel = 'Last 3 days';
  showYAxisLabel = true;
  xAxisLabel = 'Patient serve';

  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };

// pie chart
  single1: any[];
  view1: any[] = [500, 300];

  // options
  gradient1 = true;
  showLegend1 = true;
  showLabels1 = true;
  isDoughnut1 = false;
  legendPosition1 = 'below';

  colorScheme1 = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };


  constructor() {
    Object.assign(this, { single });
    Object.assign(this, { single1 });
  }

  ngOnInit() {
  }


  onSelect(data): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }
}
