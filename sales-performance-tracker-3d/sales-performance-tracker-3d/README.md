This is a management dashboard that demonstrates use of different 3-d charts from FusionCharts Suite XT.

Charts used (alias in bracket)
    * Multi-series Column 3D + Multi-series Line - Dual Y Axis Chart (mscolumn3dlinedy)
    * Bar (bar2d)
    * Column (column3d)
    * Pie (pie3d)
    * Stacked Column 3d (stackedcolumn3d)

The dashboard has the following folder structure
freshforks-3d
    - index.html
    - README.md
    - css (contains css files)
    - img (contains img files)
    - js (contains js files)
    - fusioncharts (contains FusionCharts library files)

# dashboard.js
This is the controller file which reads data from from the object inside data.js
and prepares the chart object.

# data.js
This file contains the input data object for all charts that are to be drawn.
This data object is used by the dashboard.js for each chart while rendering it.

# fusioncharts.theme.freshforks-3d.js
This is the theme file which is used to define the cosmetic properties of chart
such as chart-padding, chart-margin etc.