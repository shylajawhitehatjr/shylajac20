

function istouching(object1,object2)
{

  if( object1.x-object2.x < object1.width/2 + object2.width/2
    && object2.x-object1.x<object1.width/2+object2.width/2
    && object1.y-object2.y < object1.height/2 + object2.height/2
    && object2.y- object1.y< object1.height/2+ object2.height/2)
  {
    //moverect.shapeColor="red";
    //fixedrect.shapeColor="red";
    return true;
  }
  
  else{
    //moverect.shapeColor="green";
    //fixedrect.shapeColor="green";

    return false;
  }


}