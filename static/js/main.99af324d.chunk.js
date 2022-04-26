(this["webpackJsonpfood-order-app"]=this["webpackJsonpfood-order-app"]||[]).push([[0],[,,,function(e,t,n){e.exports={"cart-items":"Cart_cart-items__1leeV",total:"Cart_total__3fOAK",actions:"Cart_actions__1t31m","button--alt":"Cart_button--alt__2DEWP",button:"Cart_button__PLnMu"}},function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__2w_wo",summary:"CartItem_summary__1_doV",price:"CartItem_price__2J66h",amount:"CartItem_amount__26cLc",actions:"CartItem_actions__3CFQc"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__37y8I",icon:"HeaderCartButton_icon__3cQ9r",badge:"HeaderCartButton_badge__2wO3F",bump:"HeaderCartButton_bump__1pxQf"}},,function(e,t,n){e.exports={meal:"MealItem_meal__23KAO",description:"MealItem_description__2SOk-",price:"MealItem_price__xfGBF"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__29ESd",modal:"Modal_modal__2i5J0","slide-down":"Modal_slide-down__2dgf3"}},,function(e,t,n){e.exports={header:"Header_header__39gLR","main-image":"Header_main-image__lNCRU"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__3QGHp"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__1gaFH","meals-appear":"AvailableMeals_meals-appear__jqWIk"}},function(e,t,n){e.exports={card:"Card_card__2kV5b"}},function(e,t,n){e.exports={form:"MealItemForm_form__2zmWb"}},function(e,t,n){e.exports={input:"Input_input__21zRy"}},,,,,,function(e,t,n){},,function(e,t,n){"use strict";n.r(t);var a=n(5),c=n.n(a),r=(n(24),n(2)),i=n(1),s=n.n(i),o=s.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){}}),l=n(0),d=function(){return Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(l.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},m=n(7),u=n.n(m),j=s.a.useContext,b=s.a.useEffect,x=s.a.useState;var p=function(e){var t=x(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],i=j(o),s=i.items.reduce((function(e,t){return e+t.amount}),0),m="".concat(u.a.button," ").concat(a?u.a.bump:""),p=i.items;return b((function(){if(0!==p.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){return clearTimeout(e)}}}),[p]),Object(l.jsxs)("button",{className:m,onClick:e.onCartBtnClick,children:[Object(l.jsx)("span",{className:u.a.icon,children:Object(l.jsx)(d,{})}),Object(l.jsx)("span",{children:"Your Cart"}),Object(l.jsx)("span",{className:u.a.badge,children:s})]})},_=n.p+"static/media/meals.95a82f4f.jpg",h=n(12),f=n.n(h),O=s.a.Fragment;var v=function(e){return Object(l.jsxs)(O,{children:[Object(l.jsxs)("header",{className:f.a.header,children:[Object(l.jsx)("h1",{children:"Meals"}),Object(l.jsx)(p,{onCartBtnClick:e.onCartBtnClick})]}),Object(l.jsx)("div",{className:f.a["main-image"],children:Object(l.jsx)("img",{src:_,alt:"img - table full of food"})})]})},C=n(14),g=n.n(C);var I=function(){return Object(l.jsxs)("section",{className:g.a.summary,children:[Object(l.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(l.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(l.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},A=n(15),N=n.n(A),y=n(16),k=n.n(y);var M=function(e){return Object(l.jsx)("div",{className:k.a.card,children:e.children})},B=n(9),w=n.n(B),F=n(17),H=n.n(F),E=n(19),R=n(18),T=n.n(R),S=s.a.forwardRef((function(e,t){return Object(l.jsxs)("div",{className:T.a.input,children:[Object(l.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(l.jsx)("input",Object(E.a)({ref:t},e.input))]})})),D=s.a.useRef,z=s.a.useState;var P=function(e){var t=z(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],i=D();return Object(l.jsxs)("form",{className:H.a.form,onSubmit:function(t){t.preventDefault();var n=parseInt(i.current.value);n<1||n>5?c(!1):e.onAddToCart(n)},children:[Object(l.jsx)(S,{ref:i,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(l.jsx)("button",{children:"+ Add"}),!a&&Object(l.jsx)("p",{children:"Please enter a valid amount from 1 to 5"})]})},V=s.a.useContext;var J=function(e){var t=V(o),n="$".concat(e.price.toFixed(2));return Object(l.jsxs)("li",{className:w.a.meal,children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h3",{children:e.name}),Object(l.jsx)("div",{className:w.a.description,children:e.description}),Object(l.jsx)("div",{className:w.a.price,children:n})]}),Object(l.jsx)("div",{children:Object(l.jsx)(P,{onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},Q=[{id:"m1",name:"Sushi",description:"Finest fish and veggies",price:22.99},{id:"m2",name:"Schnitzel",description:"A german specialty!",price:16.5},{id:"m3",name:"Barbecue Burger",description:"American, raw, meaty",price:12.99},{id:"m4",name:"Green Bowl",description:"Healthy...and green...",price:18.99}];var G=function(){var e=Q.map((function(e){return Object(l.jsx)(J,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(l.jsx)("section",{className:N.a.meals,children:Object(l.jsx)(M,{children:Object(l.jsx)("ul",{children:e})})})},L=s.a.Fragment;var W=function(){return Object(l.jsxs)(L,{children:[Object(l.jsx)(I,{}),Object(l.jsx)(G,{})]})},$=n(3),q=n.n($),K=n(10),Y=n.n(K),U=s.a.Fragment;function X(e){return Object(l.jsx)("div",{className:Y.a.backdrop,onClick:e.onCloseCart})}var Z=document.getElementById("overlays");function ee(e){return Object(l.jsx)("div",{className:Y.a.modal,children:Object(l.jsx)("div",{className:Y.a.content,children:e.children})})}var te=function(e){return Object(l.jsxs)(U,{children:[c.a.createPortal(Object(l.jsx)(X,{onCloseCart:e.onCloseCart}),Z),c.a.createPortal(Object(l.jsx)(ee,{children:e.children}),Z)]})},ne=n(4),ae=n.n(ne),ce=function(e){var t="$".concat(e.price.toFixed(2));return Object(l.jsxs)("li",{className:ae.a["cart-item"],children:[Object(l.jsxs)("div",{children:[Object(l.jsx)("h2",{children:e.name}),Object(l.jsxs)("div",{className:ae.a.summary,children:[Object(l.jsx)("span",{className:ae.a.price,children:t}),Object(l.jsxs)("span",{className:ae.a.amount,children:["x ",e.amount]})]})]}),Object(l.jsxs)("div",{className:ae.a.actions,children:[Object(l.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(l.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},re=s.a.useContext;var ie=function(e){var t=re(o),n="$".concat(t.totalAmount.toFixed(2)),a=t.items.length>0,c=function(e){t.addItem(e)},r=function(e){t.removeItem(e)},i=Object(l.jsx)("ul",{className:q.a["cart-items"],children:t.items.map((function(e){return Object(l.jsx)(ce,{name:e.name,amount:e.amount,price:e.price,onAdd:c.bind(null,e),onRemove:r.bind(null,e.id)},e.id)}))});return Object(l.jsxs)(te,{onCloseCart:e.onCloseCartBtnClick,children:[i,Object(l.jsxs)("div",{className:q.a.total,children:[Object(l.jsx)("span",{children:"Total Amount"}),Object(l.jsx)("span",{children:n})]}),Object(l.jsxs)("div",{className:q.a.actions,children:[Object(l.jsx)("button",{className:q.a["button--alt"],onClick:e.onCloseCartBtnClick,children:"Close"}),a&&Object(l.jsx)("button",{className:q.a.button,children:"Order"})]})]})},se=n(13),oe=s.a.useReducer,le={items:[],totalAmount:0},de=function(e,t){switch(t.type){case"ADD_ITEM":var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id}));return c>-1?(n=Object(se.a)(e.items))[c].amount+=t.item.amount:n=e.items.concat(t.item),{items:n,totalAmount:a};case"REMOVE_ITEM":var r,i=e.items.findIndex((function(e){return e.id===t.id})),s=e.items[i].amount-1;r=Object(se.a)(e.items);var o=e.totalAmount-r[i].price;return s<1?r.splice(i,1):r[i].amount=s,{items:r,totalAmount:o};default:return le}};var me=function(e){var t=oe(de,le),n=Object(r.a)(t,2),a=n[0],c=n[1],i={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD_ITEM",item:e})},removeItem:function(e){c({type:"REMOVE_ITEM",id:e})}};return Object(l.jsx)(o.Provider,{value:i,children:e.children})},ue=s.a.useState;var je=function(){var e=ue(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(l.jsxs)(me,{children:[n&&Object(l.jsx)(ie,{onCloseCartBtnClick:function(){a(!1)}}),Object(l.jsx)(v,{onCartBtnClick:function(){a(!0)}}),Object(l.jsx)("main",{children:Object(l.jsx)(W,{})})]})};c.a.render(Object(l.jsx)(je,{}),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.99af324d.chunk.js.map