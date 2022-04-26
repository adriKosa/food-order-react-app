(this["webpackJsonpfood-order-app"]=this["webpackJsonpfood-order-app"]||[]).push([[0],[,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1leeV",total:"Cart_total__3fOAK",actions:"Cart_actions__1t31m","button--alt":"Cart_button--alt__2DEWP",button:"Cart_button__PLnMu"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2w_wo",summary:"CartItem_summary__1_doV",price:"CartItem_price__2J66h",amount:"CartItem_amount__26cLc",actions:"CartItem_actions__3CFQc"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__37y8I",icon:"HeaderCartButton_icon__3cQ9r",badge:"HeaderCartButton_badge__2wO3F",bump:"HeaderCartButton_bump__1pxQf"}},,function(e,t,n){e.exports={meal:"MealItem_meal__23KAO",description:"MealItem_description__2SOk-",price:"MealItem_price__xfGBF"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__29ESd",modal:"Modal_modal__2i5J0","slide-down":"Modal_slide-down__2dgf3"}},,function(e,t,n){e.exports={header:"Header_header__39gLR","main-image":"Header_main-image__lNCRU"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__3QGHp"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1gaFH","meals-appear":"AvailableMeals_meals-appear__jqWIk"}},function(e,t,n){e.exports={card:"Card_card__2kV5b"}},function(e,t,n){e.exports={form:"MealItemForm_form__2zmWb"}},function(e,t,n){e.exports={input:"Input_input__21zRy"}},,,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(5),c=n.n(a),r=(n(25),n(2)),i=n(1),s=n.n(i),o=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),l=n(0),d=function(){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(l.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},m=n(7),u=n.n(m);var j=function(e){var t=Object(i.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useContext)(o),m=s.items.reduce((function(e,t){return e+t.amount}),0),j="".concat(u.a.button," ").concat(a?u.a.bump:""),b=s.items;return Object(i.useEffect)((function(){if(0!==b.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){return clearTimeout(e)}}}),[b]),Object(l.jsxs)("button",{className:j,onClick:e.onCartBtnClick,children:[Object(l.jsx)("span",{className:u.a.icon,children:Object(l.jsx)(d,{})}),Object(l.jsx)("span",{children:"Your Cart"}),Object(l.jsx)("span",{className:u.a.badge,children:m})]})},b=n.p+"static/media/meals.95a82f4f.jpg",x=n(12),p=n.n(x);var O=function(e){return Object(l.jsxs)(i.Fragment,{children:[Object(l.jsxs)("header",{className:p.a.header,children:[Object(l.jsx)("h1",{children:"Meals"}),Object(l.jsx)(j,{onCartBtnClick:e.onCartBtnClick})]}),Object(l.jsx)("div",{className:p.a["main-image"],children:Object(l.jsx)("img",{src:b,alt:"img - table full of food"})})]})},_=n(14),h=n.n(_);var f=function(){return Object(l.jsxs)("section",{className:h.a.summary,children:[Object(l.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(l.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(l.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(15),C=n.n(v),g=n(16),I=n.n(g);var A=function(e){return Object(l.jsx)("div",{className:I.a.card,children:e.children})},N=n(9),y=n.n(N),k=n(17),M=n.n(k),B=n(20),w=n(18),F=n.n(w),H=s.a.forwardRef((function(e,t){return Object(l.jsxs)("div",{className:F.a.input,children:[Object(l.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(l.jsx)("input",Object(B.a)({ref:t},e.input))]})}));var E=function(e){var t=Object(i.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],s=Object(i.useRef)();return Object(l.jsxs)("form",{className:M.a.form,onSubmit:function(t){t.preventDefault();var n=parseInt(s.current.value);n<1||n>5?c(!1):e.onAddToCart(n)},children:[Object(l.jsx)(H,{ref:s,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(l.jsx)("button",{children:"+ Add"}),!a&&Object(l.jsx)("p",{children:"Please enter a valid amount from 1 to 5"})]})};var R=function(e){var t=Object(i.useContext)(o),n="$".concat(e.price.toFixed(2));return Object(l.jsxs)("li",{className:y.a.meal,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)("div",{className:y.a.description,children:e.description}),Object(l.jsx)("div",{className:y.a.price,children:n})]}),Object(l.jsx)("div",{children:Object(l.jsx)(E,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},T=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}];var S=function(){var e=T.map((function(e){return Object(l.jsx)(R,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(l.jsx)("section",{className:C.a.meals,children:Object(l.jsx)(A,{children:Object(l.jsx)("ul",{children:e})})})},D=n(19);var z=function(){return Object(l.jsxs)(D.Fragment,{children:[Object(l.jsx)(f,{}),Object(l.jsx)(S,{})]})},P=n(3),V=n.n(P),J=n(10),Q=n.n(J);function G(e){return Object(l.jsx)("div",{className:Q.a.backdrop,onClick:e.onCloseCart})}var L=document.getElementById("overlays");function W(e){return Object(l.jsx)("div",{className:Q.a.modal,children:Object(l.jsx)("div",{className:Q.a.content,children:e.children})})}var $=function(e){return Object(l.jsxs)(i.Fragment,{children:[c.a.createPortal(Object(l.jsx)(G,{onCloseCart:e.onCloseCart}),L),c.a.createPortal(Object(l.jsx)(W,{children:e.children}),L)]})},q=n(4),K=n.n(q),Y=function(e){var t="$".concat(e.price.toFixed(2));return Object(l.jsxs)("li",{className:K.a["cart-item"],children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:e.name}),Object(l.jsxs)("div",{className:K.a.summary,children:[Object(l.jsx)("span",{className:K.a.price,children:t}),Object(l.jsxs)("span",{className:K.a.amount,children:["x ",e.amount]})]})]}),Object(l.jsxs)("div",{className:K.a.actions,children:[Object(l.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(l.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})};var U=function(e){var t=Object(i.useContext)(o),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.addItem(e)},r=function(e){t.removeItem(e)},s=Object(l.jsx)("ul",{className:V.a["cart-items"],children:t.items.map((function(e){return Object(l.jsx)(Y,{name:e.name,amount:e.amount,price:e.price,onAdd:c.bind(null,e),onRemove:r.bind(null,e.id)},e.id)}))});return Object(l.jsxs)($,{onCloseCart:e.onCloseCartBtnClick,children:[s,Object(l.jsxs)("div",{className:V.a.total,children:[Object(l.jsx)("span",{children:"Total Amount"}),Object(l.jsx)("span",{children:n})]}),Object(l.jsxs)("div",{className:V.a.actions,children:[Object(l.jsx)("button",{className:V.a["button--alt"],onClick:e.onCloseCartBtnClick,children:"Close"}),a&&Object(l.jsx)("button",{className:V.a.button,children:"Order"})]})]})},X=n(13),Z={items:[],totalAmount:0},ee=function(e,t){switch(t.type){case"ADD_ITEM":var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id}));return c>-1?(n=Object(X.a)(e.items))[c].amount+=t.item.amount:n=e.items.concat(t.item),{items:n,totalAmount:a};case"REMOVE_ITEM":var r,i=e.items.findIndex((function(e){return e.id===t.id})),s=e.items[i].amount-1;r=Object(X.a)(e.items);var o=e.totalAmount-r[i].price;return s<1?r.splice(i,1):r[i].amount=s,{items:r,totalAmount:o};default:return Z}};var te=function(e){var t=Object(i.useReducer)(ee,Z),n=Object(r.a)(t,2),a=n[0],c=n[1],s={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD_ITEM",item:e})},removeItem:function(e){c({type:"REMOVE_ITEM",id:e})}};return Object(l.jsx)(o.Provider,{value:s,children:e.children})};var ne=function(){var e=Object(i.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)(te,{children:[n&&Object(l.jsx)(U,{onCloseCartBtnClick:function(){a(!1)}}),Object(l.jsx)(O,{onCartBtnClick:function(){a(!0)}}),Object(l.jsx)("main",{children:Object(l.jsx)(z,{})})]})};c.a.render(Object(l.jsx)(ne,{}),document.getElementById("root"))}],[[27,1,2]]]);
//# sourceMappingURL=main.43cdf86c.chunk.js.map