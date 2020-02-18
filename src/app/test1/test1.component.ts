import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test1',
  templateUrl: './test1.component.html',
  styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
  deptList:string[]
  tagList:string[]
  constructor() { }
  ngOnInit() {

    this.deptList=["CE","EC","IT","AERO","MECHANICAL","ELECTRICAL","IC"]
    this.tagList=["Comp.Science","Info.Tech.","Aerodynamics","Heat Energy","General","English","Instrumentation"]
  }

}