import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body-elements',
  templateUrl: './body-elements.component.html',
  styleUrls: ['./body-elements.component.css']
})
export class BodyElementsComponent implements OnInit {
  ngOnInit() {
    const sections = document.querySelectorAll('section');
    const options = {
      threshold: 0.5 // Adjust this threshold value based on your preference
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show-animate');
        } else {
          entry.target.classList.remove('show-animate');
        }
      });
    }, options);

    sections.forEach(section => {
      observer.observe(section);
    });
  }
}
