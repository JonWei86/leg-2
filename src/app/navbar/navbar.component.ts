import { Component, ViewChild, OnInit, AfterViewInit,  ElementRef, HostListener } from '@angular/core';
import { ViewportScroller } from '@angular/common';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @ViewChild('stickyMenu') menuElement!: ElementRef;
  
  sticky:boolean = false;
  elementPosition:any;
  
  constructor(private viewportScroller: ViewportScroller){}
  public onClick(elementId: string){
    this.viewportScroller.scrollToAnchor(elementId);
  }
  
  ngOnInit(){}
  
  ngAfterViewInit(){
    this.elementPosition = this.menuElement.nativeElement.offsetTop;
  }
  
@HostListener('window:scroll', ['$event'])
handleScroll(){
  const windowScroll = window.pageYOffset;

  if(windowScroll >= this.elementPosition){
    this.sticky = true;
  }else{
    this.sticky = false;
  }
}

}
