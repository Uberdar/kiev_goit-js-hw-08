!function(){var e=document.querySelector("form.feedback-form"),t=document.querySelector("form.feedback-form input"),a=document.querySelector("form.feedback-form textarea"),o={};if(localStorage.getItem("feedback-form-state")){var r=JSON.parse(localStorage.getItem("feedback-form-state"));a.value=null==r?void 0:r.message,t.value=null==r?void 0:r.email,o.email=null==r?void 0:r.email,o.message=null==r?void 0:r.message}e.addEventListener("submit",(function(t){t.preventDefault(),localStorage.removeItem("feedback-form-state"),e.reset()})),a.addEventListener("input",(function(e){o.message=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(o))})),t.addEventListener("input",(function(e){o.email=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(o))}))}();
//# sourceMappingURL=03-feedback.e3789aa2.js.map
