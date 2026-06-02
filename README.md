# Air Quality Analysis of New Delhi Before and After COVID-19 Lockdown using Google Earth Engine

## Overview

This project focuses on analyzing the impact of the COVID-19 lockdown on air quality in New Delhi using Sentinel-5P satellite data and Google Earth Engine. The study evaluates atmospheric pollution levels before and after lockdown restrictions by analyzing Nitrogen Dioxide (NO₂) and Carbon Monoxide (CO) concentrations over Delhi from March 2020 to August 2020.

The analysis revealed noticeable variations in atmospheric pollutant concentrations during the lockdown and unlock phases. Satellite-based time series analysis and spatial visualization techniques were used to monitor pollution trends and assess environmental changes caused by reduced human activities and transportation.

---

## Problem Statement

Rapid urbanization, industrial activities, and vehicular emissions contribute significantly to air pollution in metropolitan cities such as New Delhi. During the COVID-19 lockdown, restrictions on transportation and industrial operations created a unique opportunity to analyze the environmental impact of reduced anthropogenic activities on atmospheric pollution levels.

This project aims to compare air quality conditions during lockdown and post-lockdown periods using satellite-derived atmospheric data.

---

## Objectives

* Analyze atmospheric NO₂ and CO concentrations over New Delhi
* Compare air pollution levels during lockdown and unlock phases
* Calculate percentage change in pollutant concentrations
* Generate spatial distribution maps of atmospheric pollutants
* Perform temporal trend analysis using time series charts

---

## Study Area

The study area focuses on New Delhi, India.

### Study Area Characteristics

* Highly urbanized metropolitan region
* Dense population and transportation network
* Major industrial and commercial activities
* High atmospheric pollution levels

---

## Dataset Used

* Sentinel-5P OFFL L3 NO₂ Data
* Sentinel-5P OFFL L3 CO Data
* Google Earth Engine datasets
* FAO GAUL Administrative Boundary Dataset

---

## Tools & Technologies

* Google Earth Engine
* JavaScript
* Remote Sensing
* GIS
* Atmospheric Pollution Analysis
* Sentinel-5P Satellite Data

---

# Methodology

1. Collection of Delhi administrative boundary
2. Selection of Sentinel-5P NO₂ and CO datasets
3. Definition of lockdown and unlock periods
4. Satellite image filtering and preprocessing
5. Mean pollutant concentration calculation
6. Percentage change analysis
7. Time series visualization
8. Spatial air quality mapping

---

# Time Periods Used

| Period         | Duration                |
| -------------- | ----------------------- |
| Lockdown Phase | March 2020 – May 2020   |
| Unlock Phase   | June 2020 – August 2020 |

---

# Results

The analysis revealed noticeable variations in atmospheric pollutant concentrations between lockdown and unlock periods across New Delhi.

### Nitrogen Dioxide (NO₂) Analysis

* Mean NO₂ during Lockdown: **0.00006124 mol/m²**
* Mean NO₂ during Unlock: **0.00006631 mol/m²**
* Percentage Change in NO₂: **+8.28%**

The increase in NO₂ concentration during the unlock phase indicates the gradual resumption of transportation, industrial operations, and urban activities after lockdown restrictions were relaxed.

---

### Carbon Monoxide (CO) Analysis

* Mean CO during Lockdown: **0.04052 mol/m²**
* Mean CO during Unlock: **0.03802 mol/m²**
* Percentage Change in CO: **-6.16%**

The relatively higher CO concentration observed during the lockdown period may be associated with increased residential fuel consumption, atmospheric stagnation conditions, and continued emissions from essential industrial and power generation activities. Unlike NO₂, Carbon Monoxide has a longer atmospheric lifetime, which can influence its temporal behavior and spatial distribution.

The decrease in CO concentration during the unlock period suggests variations in emission patterns and atmospheric conditions across the study duration.

---

### Time Series Analysis

The generated time series charts highlighted daily fluctuations in atmospheric NO₂ and CO concentrations from March 2020 to August 2020. The temporal analysis demonstrated the environmental influence of reduced anthropogenic activities during the lockdown period.

---

# Key Observations

* Atmospheric pollution levels showed noticeable variation between lockdown and unlock phases.
* NO₂ concentration increased during the unlock period due to resumed urban activities.
* CO concentration showed a slight decrease during the unlock phase.
* Satellite remote sensing effectively monitored large-scale atmospheric pollution patterns.
* Time series analysis provided clear visualization of pollutant variation over time.

---

# Future Improvements

* Inclusion of additional pollutants such as SO₂ and Aerosol Index
* Multi-year comparative air quality analysis
* Integration of machine learning for pollution forecasting
* Seasonal atmospheric trend analysis
* Real-time air quality monitoring systems

---

# Conclusion

The project successfully demonstrated the application of Sentinel-5P satellite data and Google Earth Engine for atmospheric pollution analysis over New Delhi. The results highlighted the environmental impact of COVID-19 lockdown restrictions on urban air quality and demonstrated the effectiveness of remote sensing techniques in large-scale environmental monitoring.

---

## Google Earth Engine Script

https://code.earthengine.google.com/49b29525697df8f5d9718b4dab74fd94

---

## Author

Kashika Venkatesan
B.E. Geoinformatics | Anna University CEG
