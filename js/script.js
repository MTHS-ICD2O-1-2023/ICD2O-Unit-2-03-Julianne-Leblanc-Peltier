// Copyright (c) 2024 Julianne Leblanc-Peltier All rights reserved
//
// Created by: Julianne Leblanc-Peltier
// Created on: March 2024
// This file contains the JS functions for index.html

function myButtonClicked () {
  // input
  const streetNumber = parseInt(document.getElementById("street-number").value)
  const streetName = (document.getElementById("street-name").value)

  // output
  document.getElementById("street-address").innerHTML = "Your street address is: " + streetNumber + " " + streetName
}
