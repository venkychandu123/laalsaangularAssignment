import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  customerInfo:any = [];
  orderDate: any;
  orderDetails: any;
  restaurantStatus: any = [];
  customerOutletName: any;
  data: any

  constructor(public apiService: ApiService) { }

  ngOnInit(): void {
    this.data = this.apiService.customerData().subscribe((data: any) => {
      this.orderDate = data.data.orderDate;
      this.orderDetails = data.data.orderDetails;
      this.customerOutletName = data.data.restaurantStatus.outletName+' ('+data.data.restaurantStatus.locality+')';
      console.log(data);
      console.log(this.orderDate)
      this.customerInfo.push(
        {
          "displayName": "Name",
          "value": data.data.customerStatus.customerName,
        },
        {
          "displayName": "Phone Number",
          "value": data.data.customerStatus.phoneNo,
        },
        {
          "displayName": "Email",
          "value": data.data.customerStatus.emailId,
        },
        {
          "displayName": "Address",
          "value": data.data.customerStatus.address.fullAddress
        });


      this.restaurantStatus.push({
        "displayName": "Phone",
        "value": data.data.restaurantStatus.mobile,
      },
        {
          "displayName": "Alternate No",
          "value": data.data.restaurantStatus.mobile2 + ' , ' + data.data.restaurantStatus.mobile3
        },
        {
          "displayName": "Email",
          "value": data.data.restaurantStatus.email,
        },
        {
          "displayName": "Address",
          "value": data.data.restaurantStatus.address.streetAddress1+' , '+
          data.data.restaurantStatus.address.apartmentAddress +' , '+
          data.data.restaurantStatus.address.landmark+' , '+
          data.data.restaurantStatus.address.city+' , '+
          data.data.restaurantStatus.address.state+' , '+
          data.data.restaurantStatus.address.pincode+ ' , '+
          data.data.restaurantStatus.address.country
        })
    })
  }
}
