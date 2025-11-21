
function calculateMoisture() {
    //获取输入值
    const wetWeight = parseFloat(document.getElementById('wet-weight').value);
    const dryWeight = parseFloat(document.getElementById('dry-weight').value);
    const dishWeight = parseFloat(document.getElementById('dish-weight').value);
    const wetWeightMP = parseFloat(document.getElementById('wet-weight-MP').value);
            
    //验证输入
     if (isNaN(wetWeight) || isNaN(dryWeight) || isNaN(dishWeight) || isNaN(wetWeightMP)) {
        alert('请输入所有必填字段的有效数字。');
        return;
    }
    if (wetWeight <= dishWeight) {
        alert('湿重必须大于盘重。');
        return;
    }
    if (dryWeight >= wetWeight) {
        alert('干重必须小于湿重。');
        return;
    }
    if (wetWeightMP <= 0) {
        alert('矿粉湿重必须为正数。');
        return;
    }
    if (dryWeight <= dishWeight) {
        alert('干重必须大于盘重。');
        return;
    }
    if ((wetWeight - dryWeight) > wetWeight) {
        alert('湿重-干重不能大于湿重。');
        return;
    }
    if ((wetWeight - dryWeight) <= 0) {
        alert('湿重-干重必须为正数。');
        return;
    }
    if ((wetWeight - dishWeight) <= 0) {
        alert('湿重-盘重必须为正数。');
        return;
    }   

    if (wetWeight <= 0 || dryWeight <= 0 || dishWeight < 0) {
        alert('重量值必须为正数，且盘重不能为负数。');
        return;
    }
            

    //计算结果
    const moistureContent = ((wetWeight - dryWeight) / (wetWeight - dishWeight)) * 100;
    const dryWeightMP = wetWeightMP * (1 - moistureContent / 100);  
            


    //显示结果
    document.getElementById('moisture-content').value = moistureContent.toFixed(3);
    document.getElementById('moisture-content-MP').value = dryWeightMP.toFixed(3);
    document.getElementById('result').style.display = 'block';
            
}

//支持回车键出发计算
    document.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            calculateMoisture();
        }
    });
    