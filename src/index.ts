/**
 * This program calculates Einstein's mass-energy equivalence
 *   formula, and catches user errors.
 *
 * By:      Rodas Nega
 * Version: 1.0
 * Since:   2022-09-16
 */

import promptSync from 'prompt-sync'

// The program will halt with a response at improper user inputs
try {
  const prompt = promptSync()

  const speedOfLight = 2.998 * 10 ** 8
  // input
  const userInput = prompt("Enter object's mass (kg): ")

  const matterMass = parseFloat(userInput)

  if (isNaN(matterMass)) {
    throw new Error('\nThat is an invalid number.')
  }

  if (matterMass <= 0) {
    throw new Error('\nThat is an invalid number.')
  }
  // process
  const energy = matterMass * speedOfLight ** 2
  // output
  console.log(
    `\n${matterMass} kilograms of matter would produce ${energy} J of energy.`
  )
} catch (e) {
  console.log('\nThat is an invalid input.')
}

console.log('\nDone.')
