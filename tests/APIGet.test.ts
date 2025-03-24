import { test, expect } from '@playwright/test';

test('Verify API GET Request', async ({ request }) => {
    const response = await request.get('https://reqres.in/api/users?page=2');
    expect(response.status()).toBe(200); // Validate HTTP Status Code

    const responseBody = await response.json(); // Convert response to JSON
    console.log(responseBody);

    expect(responseBody.page).toBe(2); // Validate response data
    expect(responseBody.data.length).toBeGreaterThan(0); // Check if users exist
});
