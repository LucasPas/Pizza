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

  if(top=="meat"){
    meatCost= this.meatToppings.length*.99;
    return meatCost;
  }
  if(top=="veggie"){
    meatCost= this.veggieToppings.length*.50;
    return veggieCost;
}
price(){
  return sizeCost()+toppingCost("meat")+toppingCost("veggie")
}

  //type class functions below
static promotionalDeal(pizza,percent){
  percent = percent*.01
  return pizza.price()-(pizza.price()*percent)

}

}
