import { Component, OnInit } from '@angular/core';
import { DataService } from "../data.service";
import * as utils from "../utils";

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.subject.subscribe(jsonData => this.statistics(jsonData))
  }

  nodesByType:any;
  genesInMoreThanOneReaction:any;

  statistics(jsonData){
    if (jsonData===null) return;
    this.nodeTypes(jsonData[1].nodes);
    this.multipleReactionsGenes(jsonData[1].reactions);
  }

  private nodeTypes(nodesObject) {
    const nodes = utils.obj2arr(nodesObject);
    
    const nodeTypes = nodes.map(node => node.node_type);  //array of nodeTypes
    
    const uniqueNodeTypes = Array.from(new Set(nodeTypes));

    this.nodesByType = uniqueNodeTypes.map(nodeType => {
      return {
        nodeType:nodeType,
        count: nodes.filter(node => node.node_type === nodeType).length
      };
    });
  }

  private multipleReactionsGenes(reactionsObject) {
    const reactions = utils.obj2arr(reactionsObject);
    const genes = reactions.map(reaction => reaction.genes);

    const allGenesConcatenated = Array.prototype.concat.apply([], genes);
    const geneNames = allGenesConcatenated.map(x => x.name);
    const uniqueGeneNames = Array.from(new Set(geneNames));

    const genesByReactionCount=uniqueGeneNames.map(name => {
      return {
        name: name,
        count: reactions.filter(reaction => reaction.genes.some(gene => gene.name === name)).length
      };
    });

    this.genesInMoreThanOneReaction = genesByReactionCount.filter(reaction=>reaction.count>1);

  }

}
