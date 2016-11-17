class pizza{
  //type constructor below
constructor(s,m,v){
  this.size = s;
  this.meatToppings = m
  this.veggieToppings = v
}
  //type instance functions below
sizeCost(){
  var sizeCost=0
  if(this.size == "S"){
    sizeCost=7.99;
    return sizeCost
  }
  if(this.size == "M"){
    sizeCost=9.99
    return sizeCost
  }
  if(this.size == "L"){
    sizeCost=12.99
    return sizeCost
  }
  if(this.size == "XL"){
    sizeCost=15.99
    return sizeCost
  }
}
toppingCost(top){
  var meatCost=0;
  var veggieCost=0;
  if(top=="meat"){
    meatCost= meatToppings.length*.99;
    return meatCost;
  }
  if(top=="veggie"){
    meatCost= veggieToppings.length*.50;
    return veggieCost;
}
price(){
  var totalPrice = meatCost+veggieCost+sizeCost
  return totalPrice
}

  //type class functions below


}
