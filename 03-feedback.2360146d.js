const e=document.querySelector("form.feedback-form"),t=document.querySelector("form.feedback-form input"),a=document.querySelector("form.feedback-form textarea"),o={};if(localStorage.getItem("feedback-form-state")){let e=JSON.parse(localStorage.getItem("feedback-form-state"));a.value=null==e?void 0:e.message,t.value=null==e?void 0:e.email,o.email=null==e?void 0:e.email,o.message=null==e?void 0:e.message}e.addEventListener("submit",(function(t){t.preventDefault(),localStorage.removeItem("feedback-form-state"),e.reset()})),a.addEventListener("input",(function(e){o.message=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(o))})),t.addEventListener("input",(function(e){o.email=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(o))}));
//# sourceMappingURL=03-feedback.2360146d.js.map