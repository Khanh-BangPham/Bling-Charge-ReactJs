import React, { MutableRefObject, useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
type MouseFollowProps = {
    cursorviewRef: MutableRefObject<HTMLDivElement>,
    elementRef: MutableRefObject<HTMLDivElement>,
}
export const useMouseFollow = ({cursorviewRef, elementRef} : MouseFollowProps) => {

    // console.log(elementRef.current, cursorviewRef.current)
    // useLayoutEffect(() => {
    //     const element = elementRef.current;
    //     function setMouseMove(){
    //         element.addEventListener("mouseenter", function(e){
    //             gsap.to(cursorviewRef.current, {
    //                 autoAlpha: 1,
    //                 scale: 1,
    //                 duration: .3
    //             })
    //           })
    //   }
    //   function setMouseOut(){
    //         element.addEventListener("mouseleave", function() {
    //             gsap.to(cursorviewRef.current, {
    //                 autoAlpha: 0,
    //                 scale: 0,
    //                 duration: .3
    //             })
    //         })
    //      }
    //     if (element) {
    //         element.setAttribute("onmousemove", "setMouseMove()");
    //         element.setAttribute("onmouseout", "setMouseOut()");
    //         document.addEventListener("mouseover", function(e){
    //             gsap.to(cursorviewRef.current, {
    //                 opacity: 1,
    //                 visibility: "visible",
    //                 transform: "scale(1)",
    //                 scale: 1,
    //                 duration: .3
    //             })
    //             cursorviewRef.current.setAttribute("style","top: "+(e.pageY - scrollY)+"px; left: "+(e.pageX)+"px")
    //         })
    //       return () => {


    //         document.addEventListener("mouseover", function(e){
    //             gsap.to(cursorviewRef.current, {
    //                 opacity: 1,
    //                 visibility: "visible",
    //                 transform: "scale(1)",
    //                 scale: 1,
    //                 duration: .3
    //             })
    //             cursorviewRef.current.setAttribute("style","top: "+(e.pageY - scrollY)+"px; left: "+(e.pageX)+"px")
    //         })
    //       };
    //     }

    //   });
      return elementRef;
}
