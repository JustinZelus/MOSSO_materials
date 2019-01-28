import React, { Component } from "react";
import Footer from "./Footer";
import Section from "./Section";
import SectionBig from "./SectioBig";
import Article from "./Article";
import Service from "./Service";
import Comment from "./Comment";
// import fetch from "cross-fetch";
import fetch from "isomorphic-fetch";

class Home extends Component {
  constructor(props) {
    super(props);

    let initialData;

    if (__isBrowser__) {
      console.log("===Home===Client enter __isBrowser__");

      if (window) {
        initialData = window.__initialData__;
        console.log("initialData by window");
        delete window.__initialData__;
      }
    } else {
      console.log("===Home===Server enter staticContext");
      if (this.props.staticContext) {
        console.log("initialData by staticContext");
        initialData = this.props.staticContext.initialData;
      }
    }

    // console.log(initialData);

    this.state = {
      initialData: initialData,
      sections: [
        { sectionId: 0 },
        { title: "none" },
        { description: "none" },
        { imgUrl: "/images/none.jpg" },
        { direction: "orient-left" }
      ],
      galleries: [
        { alleryId: 0 },
        { galleryFullUrl: "/images/none.jpg" },
        { galleryThumb: "/images/none.jpg" },
        { title: "none" },
        { description: "none" }
      ],
      services: [
        { serviceId: 0 },
        { serviceIcon: "faamazon" },
        { title: "none" },
        { description: "none" }
      ]
    };

    this.doJQueryToDOM = this.doJQueryToDOM.bind(this);
  }

  static requestInitailData() {
    //Production版
    // return fetch("http://www.mossomusic.ml/api/home", {}).then(res => {
    //Development版
    return fetch("http://localhost:80/api/home", {}).then(res => {
      if (res.status >= 400) throw new Error("Bad response from server");
      return res.json();
    });
  }

  componentWillMount() {
    console.log("===Home=== componentWillMount()");
    // console.log(this.state.initialData);
    if (this.state.initialData) {
      console.log("update data by initialData");
      let data = this.state.initialData;
      this.state.sections = data[0];
      this.state.galleries = data[1];
      this.state.services = data[2];
    }
  }

  componentDidMount() {
    this.doJQueryToDOM();
    console.log("===Home===  componentDidMount()");
    if (this.state.initialData == null) {
      console.log("no initialData , need to fetch api");
      Home.requestInitailData()
        .then(data => {
          this.setState({
            initialData: data,
            sections: data[0],
            galleries: data[1],
            services: data[2]
          });
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  doJQueryToDOM() {
    // var $window = $(window),
    if (__isBrowser__) {
      var $body = $("body"),
        $wrapper = $("#wrapper");

      if (!browser.canUse("object-fit"))
        (function() {
          $(".banner .image, .spotlight .image").each(function() {
            var $this = $(this),
              $img = $this.children("img"),
              positionClass = $this
                .parent()
                .attr("class")
                .match(/image-position-([a-z]+)/);

            // Set image.
            $this
              .css("background-image", 'url("' + $img.attr("src") + '")')
              .css("background-repeat", "no-repeat")
              .css("background-size", "cover");

            // Set position.
            switch (positionClass.length > 1 ? positionClass[1] : "") {
              case "left":
                $this.css("background-position", "left");
                break;

              case "right":
                $this.css("background-position", "right");
                break;

              default:
              case "center":
                $this.css("background-position", "center");
                break;
            }

            // Hide original.
            $img.css("opacity", "0");
          });
        })();

      // Smooth scroll.
      $(".smooth-scroll").scrolly();
      $(".smooth-scroll-middle").scrolly({ anchor: "middle" });

      // Wrapper.
      $wrapper.children().scrollex({
        top: "30vh",
        bottom: "30vh",
        initialize: function() {
          $(this).addClass("is-inactive");
        },
        terminate: function() {
          $(this).removeClass("is-inactive");
        },
        enter: function() {
          $(this).removeClass("is-inactive");
        },
        leave: function() {
          var $this = $(this);

          if ($this.hasClass("onscroll-bidirectional"))
            $this.addClass("is-inactive");
        }
      });

      // Items.
      $(".items")
        .scrollex({
          top: "30vh",
          bottom: "30vh",
          delay: 50,
          initialize: function() {
            $(this).addClass("is-inactive");
          },
          terminate: function() {
            $(this).removeClass("is-inactive");
          },
          enter: function() {
            $(this).removeClass("is-inactive");
          },
          leave: function() {
            var $this = $(this);

            if ($this.hasClass("onscroll-bidirectional"))
              $this.addClass("is-inactive");
          }
        })
        .children()
        .wrapInner('<div class="inner"></div>');

      // Gallery.
      $(this.refs.galleryRef)
        // $(".gallery")
        .wrapInner('<div class="inner"></div>')
        .prepend(
          browser.mobile
            ? ""
            : '<div class="forward"></div><div class="backward"></div>'
        )
        .scrollex({
          top: "30vh",
          bottom: "30vh",
          delay: 50,
          initialize: function() {
            $(this).addClass("is-inactive");
          },
          terminate: function() {
            $(this).removeClass("is-inactive");
          },
          enter: function() {
            $(this).removeClass("is-inactive");
          },
          leave: function() {
            var $this = $(this);

            if ($this.hasClass("onscroll-bidirectional"))
              $this.addClass("is-inactive");
          }
        })
        .children(".inner")
        //.css('overflow', 'hidden')
        .css("overflow-y", browser.mobile ? "visible" : "hidden")
        .css("overflow-x", browser.mobile ? "scroll" : "hidden")
        .scrollLeft(0);

      // Style #1.
      // ...

      // Style #2.
      $(".gallery")
        // $(this.refs.galleryRef)
        .on("wheel", ".inner", function(event) {
          var $this = $(this),
            delta = event.originalEvent.deltaX * 10;

          // Cap delta.
          if (delta > 0) delta = Math.min(25, delta);
          else if (delta < 0) delta = Math.max(-25, delta);

          // Scroll.
          $this.scrollLeft($this.scrollLeft() + delta);
        })
        .on("mouseenter", ".forward, .backward", function(event) {
          var $this = $(this),
            $inner = $this.siblings(".inner"),
            direction = $this.hasClass("forward") ? 1 : -1;

          // Clear move interval.
          clearInterval(this._gallery_moveIntervalId);

          // Start interval.
          this._gallery_moveIntervalId = setInterval(function() {
            $inner.scrollLeft($inner.scrollLeft() + 5 * direction);
          }, 10);
        })
        .on("mouseleave", ".forward, .backward", function(event) {
          // Clear move interval.
          clearInterval(this._gallery_moveIntervalId);
        });

      // Lightbox.
      $(".gallery.lightbox")
        // $(this.refs.galleryRef)
        .on("click", "a", function(event) {
          var $a = $(this),
            $gallery = $a.parents(".gallery"),
            $modal = $gallery.children(".modal"),
            $modalImg = $modal.find("img"),
            href = $a.attr("href");

          // Not an image? Bail.
          if (!href.match(/\.(jpg|gif|png|mp4)$/)) return;

          // Prevent default.
          event.preventDefault();
          event.stopPropagation();

          // Locked? Bail.
          if ($modal[0]._locked) return;

          // Lock.
          $modal[0]._locked = true;

          // Set src.
          $modalImg.attr("src", href);

          // Set visible.
          $modal.addClass("visible");

          // Focus.
          $modal.focus();

          // Delay.
          setTimeout(function() {
            // Unlock.
            $modal[0]._locked = false;
          }, 600);
        })
        .on("click", ".modal", function(event) {
          var $modal = $(this),
            $modalImg = $modal.find("img");

          // Locked? Bail.
          if ($modal[0]._locked) return;

          // Already hidden? Bail.
          if (!$modal.hasClass("visible")) return;

          // Lock.
          $modal[0]._locked = true;

          // Clear visible, loaded.
          $modal.removeClass("loaded");

          // Delay.
          setTimeout(function() {
            $modal.removeClass("visible");

            setTimeout(function() {
              // Clear src.
              $modalImg.attr("src", "");

              // Unlock.
              $modal[0]._locked = false;

              // Focus.
              $body.focus();
            }, 475);
          }, 125);
        })
        .on("keypress", ".modal", function(event) {
          var $modal = $(this);

          // Escape? Hide modal.
          if (event.keyCode == 27) $modal.trigger("click");
        })
        .prepend(
          '<div class="modal" tabIndex="-1"><div class="inner"><img src="" /></div></div>'
        )
        .find("img")
        .on("load", function(event) {
          var $modalImg = $(this),
            $modal = $modalImg.parents(".modal");

          setTimeout(function() {
            // No longer visible? Bail.
            if (!$modal.hasClass("visible")) return;

            // Set loaded.
            $modal.addClass("loaded");
          }, 275);
        });
    }
  }

  render() {
    const sections = this.state.sections.map((section, index) => {
      if (index >= 1 && section.sectionId) {
        return (
          <Section
            key={index}
            keyId={section.sectionId}
            orient={section.direction}
            title={section.title}
            description={section.description}
            imgUrl={section.imgUrl}
          />
        );
      }
    });

    return (
      <div>
        <div id="wrapper" className="divided">
          <SectionBig orient="orient-left" section={this.state.sections[0]} />
          {sections}
          {/* {this.state.sections.map((section, index) => {
        
            if (index >= 1 && section.sectionId){
              //if(section.sectionId)
                //console.log(index);
              return (
                <Section
                  key={index}
                  keyId={section.sectionId}
                  orient={section.direction}
                  title={section.title}
                  description={section.description}
                  imgUrl={section.imgUrl}
                />
              );
            }
          })} */}

          <section className="wrapper style1 align-center">
            <div className="inner">
              <h2>藝文活動</h2>
              <p>
                MÓSSO 為您薦年底多場超棒的獨奏會。購票請私訊，可享7折優惠唷{" "}
              </p>
            </div>

            <div
              className="gallery style2 medium lightbox onscroll-fade-in"
              ref="galleryRef"
            >
              {this.state.galleries.map((gallery, index) => {
                return (
                  <Article
                    key={index}
                    galleryFullUrl={gallery.galleryFullUrl}
                    galleryThumb={gallery.galleryThumb}
                    title={gallery.title}
                    description={gallery.description}
                  />
                );
              })}
            </div>
          </section>

          <section className="wrapper style1 align-center">
            <div className="inner">
              <h2>Our Services</h2>
              <p>MÓSSO致力於音樂藝文相關服務，熱愛音樂的您一起來看看吧</p>
              <div className="items style1 medium onscroll-fade-in">
                {this.state.services.map((service, index) => {
                  return (
                    <Service
                      key={index}
                      serviceIcon={service.serviceIcon}
                      title={service.title}
                      description={service.description}
                    />
                  );
                })}
              </div>
            </div>
          </section>

          <Comment />
          <Footer />
        </div>
      </div>
    );
  }
}

export default Home;
