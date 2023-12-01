# License Key Formatting

## Challenge Description

This challenge involves formatting a string that represents a license key. The original license key consists of alphanumeric characters and dashes (`-`). The objective is to reformat the license key so that each group contains exactly `K` characters, except for the first group, which can be shorter than `K` but must contain at least one character. Additionally, all alphabetic characters must be converted to uppercase.

## Techniques Used

- **String Cleaning**: Removing dashes and converting all alphabetic characters to uppercase to standardize the input string.
- **String Grouping**: Dividing the cleaned string into groups of `K` characters, with special handling for the first group if its size is different from `K`.
- **Iteration and Group Construction**: Using a loop to iterate over the string and construct the groups, which are then joined together with dashes.
- **Input Validation**: Ensuring the function handles invalid inputs gracefully by checking the types and values of the input parameters.

## How to Run

1. Ensure you have a JavaScript runtime environment like Node.js installed.
2. Place the code in a `.js` file, such as `formatLicenseKey.js`.
3. Run the script using a command line interface, e.g., `node formatLicenseKey.js`.

## Example Usage

```javascript
console.log(formatLicenseKey('5F3Z-2e-9-w', 4)); // Outputs: "5F3Z-2E9W"
console.log(formatLicenseKey('2-5g-3-J', 2));   // Outputs: "2-5G-3J"
