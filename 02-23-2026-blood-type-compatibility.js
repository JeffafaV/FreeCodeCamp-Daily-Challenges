/*
Blood Type Compatibility
Given a donor blood type and a recipient blood type, determine whether the donor can give blood to the recipient.

Each blood type consists of:

A letter: "A", "B", "AB", or "O"
And an Rh factor: "+" or "-"
Blood types will be one of the valid letters followed by an Rh factor. For example, "AB+" and "O-" are valid blood types.

Letter Rules:

"O" can donate to other letter type.
"A" can donate to "A" and "AB".
"B" can donate to "B" and "AB".
"AB" can donate only to "AB".
Rh Rules:

Negative ("-") can donate to both "-" and "+".
Positive ("+") can donate only to "+".
Both letter and Rh rule must pass for a donor to be able to donate to the recipient.
*/

function canDonate(donor, recipient) {
  const bloodTypes = {
    O: {
      O: true,
      A: true,
      B: true,
      AB: true,
    },
    A: {
      O: false,
      A: true,
      B: false,
      AB: true,
    },
    B: {
      O: false,
      A: false,
      B: true,
      AB: true,
    },
    AB: {
      O: false,
      A: false,
      B: false,
      AB: true,
    },
  };

  const donorType = donor.slice(0, -1);
  const donorRh = donor.at(-1);
  const recipientType = recipient.slice(0, -1);
  const recipientRh = recipient.at(-1);

  if (bloodTypes[donorType][recipientType] === true) {
    if (donorRh === "-") {
      return true;
    }
    if (donorRh === "+" && recipientRh === "+") {
      return true;
    }
  }

  return false;
}

function testCases() {
  console.log(canDonate("B+", "B+"));
  console.log(canDonate("O-", "AB-"));
  console.log(canDonate("O+", "A-"));
  console.log(canDonate("A+", "AB+"));
  console.log(canDonate("A-", "B-"));
  console.log(canDonate("B-", "AB+"));
  console.log(canDonate("B-", "A+"));
  console.log(canDonate("O-", "O+"));
  console.log(canDonate("O+", "O-"));
  console.log(canDonate("AB+", "AB-"));
}

testCases();
