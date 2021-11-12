int mcb1,mcb2,mcb3,mcb4,mcb5,mcb6,mcb7,mcb8,mcb9,mcb10,i = 0;
void setup()                    // run once, when the sketch starts
{
  Serial.begin(57600);           // set up Serial library at 9600 bps
}

void loop()
{

     i=1; char data[50];
     while(i=1)
     {
     for(int r=0;r<5;r++)
     {

       sprintf(data,"%03d %03d %03d %03d %03d %03d %03d %03d %03d %03d",mcb1,mcb2,mcb3,mcb4,mcb5,mcb6,mcb7,mcb8,mcb9,mcb10);
       Serial.println(data);
       mcb1= random(47,190);
       mcb2= random(111,200);
       mcb3= random(143,200);
       mcb4= random(125,200);
       mcb5= random(51,200);
       mcb6=random(11,200);
       mcb7=random(56,200);
       mcb8=random(78,200);
       mcb9=random(35,200);
       mcb10 = random(120,200);
       delay(1000);

     }

  }

}
