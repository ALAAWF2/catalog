const fs = require('fs');

try {
    console.log("Reading supabase_orders.json...");
    const orders = JSON.parse(fs.readFileSync('supabase_orders.json', 'utf8'));

    console.log(`Found ${orders.length} orders. Generating CSV...`);

    // CSV Header matching Supabase columns exactly
    const header = [
        'id',
        'user_id',
        'mall',
        'warehouse',
        'has_extras',
        'items',
        'status',
        'created_at'
    ].join(',');

    let csvContent = header + '\n';

    orders.forEach(o => {
        // Essential fields
        const id = escapeCSV(o.id || '');
        const user_id = escapeCSV(o.userId || '');
        const mall = escapeCSV(o.mall || '');
        const warehouse = escapeCSV(o.warehouse || '');
        const has_extras = o.hasExtras === true ? 'TRUE' : 'FALSE';
        
        // JSONB column needs special escaping for CSV
        const itemsJson = JSON.stringify(o.orders || []);
        const items = escapeCSV(itemsJson);

        const status = 'pending';
        
        let created_at = new Date().toISOString(); // Default to now if missing
        if (o.timestamp) {
            created_at = escapeCSV(o.timestamp);
        }

        const row = [
            id,
            user_id,
            mall,
            warehouse,
            has_extras,
            items,
            status,
            created_at
        ].join(',');

        csvContent += row + '\n';
    });

    fs.writeFileSync('orders_import.csv', csvContent, 'utf8');
    console.log("✅ Successfully generated orders_import.csv!");
    console.log("File is ready to be uploaded to Supabase Table Editor.");

} catch (error) {
    console.error('Error generating CSV:', error);
}

// Function to properly escape CSV fields, especially important for JSON strings
function escapeCSV(field) {
    if (field === null || field === undefined) {
        return '';
    }
    
    let str = String(field);
    
    // If the field contains quotes, commas, or newlines, it must be wrapped in quotes.
    // Inside the quotes, any existing quote must be doubled.
    if (str.includes('"') || str.includes(',') || str.includes('\n') || str.includes('\r')) {
        str = str.replace(/"/g, '""');
        return `"${str}"`;
    }
    
    return str;
}
