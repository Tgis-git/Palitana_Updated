var size = 0;
var placement = 'point';
function categories_Forest_Type_2023_30(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement, textAlign, offsetX, offsetY, overflow, repeat) {
    var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
    switch(valueStr) {
        case '3B/C2 Southern moist mixed deciduous forest':
            return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,128,143,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '5/DS4 Dry Grassland':
            return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(205,129,226,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '5/E 8c Salvadora-T amarix scrub':
            return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(23,228,143,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '5/E1 Anogeissus pendula Foorest':
            return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,224,28,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '5/E1 anogeissus pendula forest':
            return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(54,205,61,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '5/E1 Anogeissus pendula forest':
            return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(108,147,227,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '5/E1 Anogeissus pendula Forest':
            return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(32,192,217,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case '6/E4 Salvadora scrub':
            return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(234,170,125,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Acacia senegal forest':
            return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(160,235,85,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;

        case 'Water':
            return [ new ol.style.Style({
        fill: new ol.style.Fill({color: 'rgba(0,32,109,1.0)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth, textAlign, offsetX, offsetY, overflow, repeat)
    })];
			break;
    }};

var style_Forest_Type_2023_30 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Type");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = 'left';
    var offsetX = 8;
    var offsetY = 3;
    var overflow = false;
    var repeat = 0;
    var placement = 'point';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Forest_Type_2023_30(feature, value, size, resolution, labelText,
                          labelFont, labelFill, bufferColor,
                          bufferWidth, placement, textAlign, offsetX, offsetY, overflow, repeat);

    return style;
};
