// Load Delhi Boundary
var delhi = ee.FeatureCollection("FAO/GAUL/2015/level1")
               .filter(ee.Filter.eq('ADM1_NAME', 'Delhi'));
Map.centerObject(delhi, 8);
// Define Time Periods
var lockdown_start = '2020-03-01'; var lockdown_end   = '2020-05-31'; var unlock_start   = '2020-06-01'; var unlock_end     = '2020-08-31';
// Load Sentinel-5P Data
var no2 = ee.ImageCollection("COPERNICUS/S5P/OFFL/L3_NO2")
             .select('tropospheric_NO2_column_number_density')
             .filterBounds(delhi);

var co = ee.ImageCollection("COPERNICUS/S5P/OFFL/L3_CO")
            .select('CO_column_number_density')
            .filterBounds(delhi);
// Function to Calculate Mean Image
function getMeanImage(collection, start, end) {
  return collection
           .filterDate(start, end)
           .mean()
           .clip(delhi);
}
// Get Mean Images
var no2_lock = getMeanImage(no2, lockdown_start, lockdown_end);
var no2_unlk = getMeanImage(no2, unlock_start, unlock_end);
var co_lock = getMeanImage(co, lockdown_start, lockdown_end);
var co_unlk = getMeanImage(co, unlock_start, unlock_end);
// Compute Mean Values over Delhi
var scale = 1000;
var no2_lock_mean = no2_lock.reduceRegion({
  reducer: ee.Reducer.mean(),
  geometry: delhi.geometry(),
  scale: scale,
  maxPixels: 1e13
}).get('tropospheric_NO2_column_number_density');
var no2_unlk_mean = no2_unlk.reduceRegion({
  reducer: ee.Reducer.mean(),
  geometry: delhi.geometry(),
  scale: scale,
  maxPixels: 1e13
}).get('tropospheric_NO2_column_number_density');
var co_lock_mean = co_lock.reduceRegion({
  reducer: ee.Reducer.mean(),
  geometry: delhi.geometry(),
  scale: scale,
  maxPixels: 1e13
}).get('CO_column_number_density');
var co_unlk_mean = co_unlk.reduceRegion({
  reducer: ee.Reducer.mean(),
  geometry: delhi.geometry(),
  scale: scale,
  maxPixels: 1e13
}).get('CO_column_number_density');
// Calculate % Change
var calcPercentChange = function(before, after) {
  return ee.Number(after).subtract(before)
                         .divide(before)
                         .multiply(100);
};
var no2_change = calcPercentChange(no2_lock_mean, no2_unlk_mean);
var co_change = calcPercentChange(co_lock_mean, co_unlk_mean);
// Print Results
print('Mean NO₂ during Lockdown (mol/m²):', no2_lock_mean);
print('Mean NO₂ during Unlock (mol/m²):', no2_unlk_mean);
print('% Change in NO₂:', no2_change);
print('Mean CO during Lockdown (mol/m²):', co_lock_mean);
print('Mean CO during Unlock (mol/m²):', co_unlk_mean);
print('% Change in CO:', co_change);
// Visualization (Optional Map Layers)
var no2_vis = {
  min: 0, max: 0.0002,
  palette: ['black', 'purple', 'blue', 'cyan', 'green', 'yellow', 'red']
};
var co_vis = {
  min: 0, max: 0.05,
  palette: ['black', 'blue', 'purple', 'green', 'yellow', 'red']
};
Map.addLayer(no2_lock, no2_vis, 'NO₂ Lockdown');
Map.addLayer(no2_unlk, no2_vis, 'NO₂ Unlock');
Map.addLayer(co_lock, co_vis, 'CO Lockdown');
Map.addLayer(co_unlk, co_vis, 'CO Unlock');
// Time Series Chart for NO₂
var no2_series = ui.Chart.image.series({
  imageCollection: no2.filterDate('2020-03-01', '2020-08-31'),
  region: delhi.geometry(),
  reducer: ee.Reducer.mean(),
  scale: 1000,
  xProperty: 'system:time_start'
})
.setOptions({
  title: 'Time Series of NO₂ over Delhi (Mar–Aug 2020)',
  hAxis: {title: 'Date'},
  vAxis: {title: 'NO₂ (mol/m²)'},
  lineWidth: 2,
  pointSize: 4,
  colors: ['blue']
});
// Time Series Chart for CO
var co_series = ui.Chart.image.series({
  imageCollection: co.filterDate('2020-03-01', '2020-08-31'),
  region: delhi.geometry(),
  reducer: ee.Reducer.mean(),
  scale: 1000,
  xProperty: 'system:time_start'
})
.setOptions({
  title: 'Time Series of CO over Delhi (Mar–Aug 2020)',
  hAxis: {title: 'Date'},
  vAxis: {title: 'CO (mol/m²)'},
  lineWidth: 2,
  pointSize: 4,
  colors: ['green']
});
// Display the Charts
print(no2_series);
print(co_series);
