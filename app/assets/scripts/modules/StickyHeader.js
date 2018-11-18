import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from 'jquery-smooth-scroll';

class StickyHeader {
  constructor() {
    this.lazyImages = $(".lazyload");
    this.headerLinks = $(".primary-nav a");
    this.pageSections = $(".page-section");
    this.siteHeader = $(".site-header");
    this.triggerElement = $(".large-hero__title");
    this.createHeaderWaypoint();
    this.createPageSectionWaypoints();
    this.addSmoothScroll();
    this.refreshElements();
  }

  refreshElements() {
    this.lazyImages.on('load', function(){
      Waypoint.refreshAll();
    });
  }

  addSmoothScroll() {
    this.headerLinks.smoothScroll()
  }

  createHeaderWaypoint() {
    var _this = this;
    new Waypoint({
      element: _this.triggerElement[0],
      handler: function(direction) {

        if (direction == "down") {
          $(_this.siteHeader).addClass("site-header--dark");
        } else {
          $(_this.siteHeader).removeClass("site-header--dark");
        }
      }
    });
  }

  createPageSectionWaypoints() {
    var that = this;
    this.pageSections.each(function() {
      var currentSection = this;
      new Waypoint({
        element: currentSection,
        handler: function(direction) {
          if (direction == "down") {
            var matchingHeaderLink = currentSection.getAttribute("data-matching-link");
          }
          that.headerLinks.removeClass("is-current-link");
          $(matchingHeaderLink).addClass("is-current-link");
        },
        offset: "18%"
      });

      new Waypoint({
        element: currentSection,
        handler: function(direction) {
          if (direction == "up") {
            var matchingHeaderLink = currentSection.getAttribute("data-matching-link");
          }
          that.headerLinks.removeClass("is-current-link");
          $(matchingHeaderLink).addClass("is-current-link");
        },
        offset: "-40%"
      });
    });
  }
}

export default StickyHeader