import { test, expect } from '@playwright/test';


test('Check if is the first page Codere', async ({ page }) => {
  await page.goto('https://m.apuestas.codere.es/')
  await expect(page).toHaveTitle(/Codere/)
});

test('Check if I open the register page', async ({ page }) => {
  await page.goto('https://m.apuestas.codere.es/');

  // Click the register button.
  await page.getByRole('button', { name: 'ACEPTAR' }).click()
  await page.getByRole('button', { name: 'Regístrate' }).click()

  // Expects the URL to contain register page.
  await expect(page).toHaveURL(/.*RegistroESPage/);

  // Fill the first name 
  await page.getByRole('textbox', { name: 'Nombre' }).fill('test first name')

  // Fill the second name 
  await page.getByRole('textbox', { name: 'Primer Apellido' }).fill('test second name')

  // Fill the last name 
  await page.getByRole('textbox', { name: 'Segundo Apellido' }).fill('test last name')

  // Fill the day of birthday 
  const day = page.locator('#birthDay').getByRole('combobox')
  day.click()
  await day.selectOption('13')

  // Fill the month of birthday 
  const month = page.locator('#birthMonth').getByRole('combobox')
  month.click()
  await month.selectOption('Marzo')

  // Fill the year of birthday 
  await page.getByRole('spinbutton', { name: 'Año' }).fill('1987')

  // Selecting residency 
  const residency = page.getByRole('combobox', { name: 'Residencia checkmark circle-outline' })
  residency.click()
  await residency.selectOption('Residente en España')

  // Selecting nationality
  const nationality = page.getByRole('combobox', { name: 'Nacionalidad checkmark circle-outline' })
  nationality.click()
  await nationality.selectOption('Español')

  // Selecting profession
  const profession = page.getByRole('combobox', { name: 'Profesión information circle-outline' })
  profession.click()
  await profession.selectOption('Humanidades')

  // Fill the DNI 
  await page.getByRole('textbox', { name: 'DNI' }).fill('42046203H')

  // Fill the address 
  await page.getByRole('textbox', { name: 'Dirección' }).fill('Calle Colegiata de Bolea')

  // Fill the postal code  
  await page.getByRole('spinbutton', { name: 'Código Postal' }).fill('50013')

  // Fill the phone 
  await page.getByRole('textbox', { name: 'Móvil' }).fill('617000487')

  // Fill the email 
  await page.getByRole('textbox', { name: 'Email' }).fill('testcodere@gmail.com')

  // Fill user login 
  await page.getByRole('textbox', { name: 'Usuario' }).fill('testCodere01')

  // Fill user password 
  await page.getByRole('textbox', { name: 'Contraseña' }).fill('1234AbC@')

  // Click privacy policy checkbox 
  await page.locator('#checkbox-17-0').click()

  // Click communications checkbox 
  await page.locator('#checkbox-18-0').click()

  // Click on finish registration 
  await page.getByRole('button', { name: 'Finalizar Registro' }).click()

  // Waiting for alert appears 
  await page.waitForSelector('text=No, gracias', {timeout: 5000})

  // Click on No gracias 
  await page.getByRole('button', { name: 'No, gracias' }).click()

  await page.pause()
});

